<template>
    <section class="page_404">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <div class="four_zero_four_bg">
                        <h1 class="text-center">404</h1>
                    </div>
                    <div class="contant_box_404">
                        <h3 class="h2">Parece que te has perdido</h3>
                        <p>La página que estás buscando no Existe!</p>
                        <router-link to="/" class="link_404">Volver a Inicio</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.page_404 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #fff;
    font-family: 'Arvo', serif;
}

.container {
    text-align: center;
}

.four_zero_four_bg {
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 50px;
}

.four_zero_four_bg h1 {
    font-size: 100px;
    margin-top: 0;
}

.contant_box_404 {
    margin-top: -30px;
}

.link_404 {
    color: #fff !important;
    padding: 15px 30px;
    background: #39ac31;
    margin: 20px 0;
    display: inline-block;
    font-size: 18px;
    transition: background 0.3s, transform 0.3s;
}

.link_404:hover {
    background: #2e8b2d;
}

.link_404:active {
    background: #267224;
    transform: scale(0.98);
}

@media (min-width: 1024px) {
    .four_zero_four_bg {
        height: 700px;
        padding-top: 0;
    }

    .four_zero_four_bg h1 {
        font-size: 150px;
        margin-top: -70px;
    }

    .contant_box_404 {
        margin-top: 20px;
    }

    .contant_box_404 h3 {
        position: absolute;
        justify-content: center;
        top: 55px;
        left: 50px;
        width: 100%;
        font-size: 50px;
        color: red;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .contant_box_404 p {
        font-size: 29px;
    }
}

@media (max-width: 1024px) {
    .four_zero_four_bg {
        height: 500px;
    }

    .four_zero_four_bg h1 {
        font-size: 100px;
    }

    .contant_box_404 h3 {
        font-size: 25px;
        color: black;
        text-shadow: none;
        position: static;
    }

    .contant_box_404 p {
        font-size: 18px;
    }
}
</style>
