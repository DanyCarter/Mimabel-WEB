export const formatCurrency = amount => Number(amount).toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR'
});


/* Para conseguir la fecha */
export const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return  `${day}/${month}/${year}`;
  }  