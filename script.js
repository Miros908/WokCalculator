const radiobutton=document.querySelectorAll('input[type="radio"]')//все радиокнопки
const baseingridient=document.querySelector('.ingridientItem')//div c основными ингридиентами
let allprice=document.querySelector('.allprice')//итоговоя сумма 
const checkboxs=document.querySelectorAll('input[type="checkbox"]')//все чекбоксы
const calculateWokList=document.querySelector('.calculateWokList')





let sumwok=99;

let basevalue=[]

radiobutton.forEach(
(radio)=>{

radio.addEventListener('change',()=>{
    basevalue=[]

    radiobutton.forEach((radiocheck)=>{


         if (radiocheck.checked) {
        // Если радиокнопка выбрана, находим соответствующий label
        let label = document.querySelector('label[for="' + radiocheck.id + '"]');
        
        // Выводим текстовое содержимое соответствующего label
       basevalue.push(label.textContent);
   
    }


    })


    baseingridient.textContent=basevalue+' '+baseingridient.dataset.price+'₴'

   

    allprice.textContent=`Общая сумма: ${sumwok}₴`

    
})    
}


)


checkboxs.forEach(

(chebox)=>{

chebox.addEventListener('change',()=>{

if(chebox.checked){
    let labelchebox = document.querySelector('label[for="' + chebox.id + '"]');
  
    const newItem = document.createElement('div');
    newItem.classList.add(chebox.id,'ingridientItem')
    newItem.textContent=labelchebox.textContent+'     '+chebox.dataset.price+'₴'

    calculateWokList.appendChild(newItem)

    sumwok=sumwok+Number(chebox.dataset.price)

    allprice.textContent=`Общая сумма: ${sumwok}₴`


}else{
    const newElement=document.querySelector('.'+chebox.id)
    calculateWokList.removeChild(newElement)

    sumwok=sumwok-Number(chebox.dataset.price)

    allprice.textContent=`Общая сумма: ${sumwok}₴`

}



})

}

)







