<script setup>
  import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
  import { collection, addDoc } from 'firebase/firestore'
  import { useFirebaseStorage, useFirestore } from 'vuefire'
  import { products } from '../../data/products'

  const storage = useFirebaseStorage()
  const db = useFirestore();

  async function seedDB() {
    const productsCollection = collection(db, "products");

    for (let i = 1; i < products.length; i++) {
      // Asume que tienes ambas versiones .webp y .jpg y eliges una para cada producto
      const formats = ['webp', 'jpg'];
      let url = '';

      for (let format of formats) {
        try {
          url = await getDownloadURL(ref(storage, `products/producto${i}.${format}`));
          break; // Sal del bucle si el archivo se encuentra
        } catch (error) {
          console.log(`No se encontró producto${i}.${format}, intentando otro formato...`);
        }
      }

      if (url) {
        addDoc(productsCollection, {
          name: products[i - 1].name,
          price: products[i - 1].price,
          availability: products[i - 1].availability,
          category: products[i - 1].category,
          image: url
        }).then(() => {
          console.log("Producto Agregado...");
        }).catch((error) => {
          console.error(error);
        });

        if (i === products.length - 1) {
          alert('Se subieron los Productos')
        }
      } else {
        console.error(`No se encontró ningún archivo válido para producto${i}`);
      }
    }
  }

  const handleSubmit = (data) => {
    const urls = [];
    data.images.forEach(fileItem => {
      const storageRef = ref(storage, `products/${fileItem.name}`);
      
      // Upload the file to Firebase Storage
      const uploadTask = uploadBytesResumable(storageRef, fileItem.file);

      // Monitor the upload progress and retrieve the download URL
      uploadTask.on('state_changed', snapshot => {
        // Upload progress can be monitored here
      }, error => {
        console.log(error)
      }, () => {
        // Upload is complete, get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          urls.push(downloadURL);
          if (urls.length === data.images.length) {
            alert('Se subieron las imágenes');
          }
        });
      });
    })
  }
</script>

<template>
  <div class="mt-10">
    <Link to="products">Volver</Link>

    <h1 class="text-4xl my-10 font-extrabold">Seeder</h1>

    <div class="flex justify-center bg-white shadow">
      <div class="mx-auto mt-10 p-10 w-full 2xl:w-2/4">
        <FormKit
          type="form"
          submit-label="Agregar Imágenes"
          incomplete-message="No se pudo enviar, revisa los mensajes"
          @submit="handleSubmit"
        >
          <FormKit 
            type="file"
            multiple="true"
            name="images"
          />
        </FormKit>

        <div class="mt-16">
          <FormKit
            type="form"
            submit-label="Agregar Productos"
            incomplete-message="No se pudo enviar, revisa los mensajes"
            @submit="seedDB"
          />
        </div>
      </div>
    </div>
  </div>
</template>
