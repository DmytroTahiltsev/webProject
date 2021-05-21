let seasones=document.querySelectorAll('.filters__link')
seasones[0].classList.add('active_link')

let wrapper=document.querySelector('.catalog__wrapper')
let catalog=document.createElement('div')
catalog.classList.add('calendar__catalog')

let summerCatalog=[
    {
        href:"../Peru/index.html",
        title:"Перу",
        img:"img/calendar/summer/1.jpg",
        status:{
            text:'Границы открыты',
            background:'#05c8aa'
        }
    },
    {
        title:"Хорватия",
        img:"img/calendar/summer/2.jpg",
        status:{
            text:'Группа набрана',
            background:'#ff7775'
        } 
    },
    {
        href:"../Stambul/index.html",
        title:"Турция",
        img:"img/calendar/summer/3.jpg",
        status:{
            text:'Границы открыты',
            background:'#05c8aa'
        }
    }
]
let autumnCatalog=[
    {
        title:"Колумбия",
        img:"img/calendar/autumn/1.jpg",
        status:{
            text:'Группа набрана',
            background:'#ff7775'
        }
    },
    {
        title:"Нидерланды",
        img:"img/calendar/autumn/3.jpg",
        status:{
            text:'Границы открыты',
            background:'#05c8aa'
        }
    },
    {
        title:"Великобритания",
        img:"img/calendar/autumn/2.jpg",
        status:{
            text:'Группа набрана',
            background:'#ff7775'
        } 
    }
    
]
let winterCatalog=[
    {
        title:"Исландия",
        img:"img/calendar/winter/1.jpg",
        status:{
            text:'Группа набрана',
            background:'#ff7775'
        }
    },
    {
        title:"Лапландия",
        img:"img/calendar/winter/2.jpg",
        status:{
            text:'Группа набрана',
            background:'#ff7775'
        } 
    },
    {
        title:"Шри-Ланка",
        img:"img/calendar/winter/3.jpg",
        status:{
            text:'Границы открыты',
            background:'#05c8aa'
        }
    }
]
let springCatalog=[
    {
        title:"Казахстан",
        img:"img/calendar/spring/3.jpg",
        status:{
            text:'Границы открыты',
            background:'#05c8aa'
        }
    },
    {
        title:"Япония",
        img:"img/calendar/spring/1.jpg",
        status:{
            text:'Группа набрана',
            background:'#ff7775'
        }
    },
    {
        title:"Бразилия",
        img:"img/calendar/spring/2.jpg",
        status:{
            text:'Группа набрана',
            background:'#ff7775'
        } 
    }
    
]
let allCatalogs=summerCatalog.concat(autumnCatalog, winterCatalog, springCatalog)

function setCatalog(season){
    function setRows(){
        let rowsQuantity=Math.ceil(season.length/3)
        catalog.innerHTML=``
        for(let i=0; i<rowsQuantity; i++){
            catalog.innerHTML+=`
                 <div class="calendar__row"></div>
            `    
        }
        wrapper.append(catalog)
    }
    wrapper.innerHTML=''
    setRows()
    let rows=document.querySelectorAll('.calendar__row')
    let itter=0
    for(let i=0; i<rows.length; i++){
        for(let j=0; j<3; j++){                         
            rows[i].innerHTML+=`
                <div class="calendar__item">
                    <a href="${season[itter].href}" class="calendar__link">
                        <span class="calendar__help"></span>
                        <span class="calendar__status" style="background-color: ${season[itter].status.background} ">${season[itter].status.text}</span>
                        <span class="calendar__info">${season[itter].title}</span>
                        <img src="${season[itter].img}" alt="" class="calendar__img">
                        <span class="calendar__info">${season[itter].title}</span>
                    </a>                                           
                </div>
            `
            itter++     
        }
        
    }
}

setCatalog(allCatalogs)
for(let i of seasones){
    i.addEventListener('click', (event)=>{
        event.preventDefault()
        for(let j of seasones){
            j.classList.remove('active_link')
        }
        i.classList.add('active_link')
        
    })
}
for(let i of seasones){
    i.addEventListener('click', (event)=>{
        let div=document.createElement('div')
        div.classList.add('calendar-grid__block')
        catalog.append(div)
        catalog.append(div)
        wrapper.append(catalog)
    })
}
seasones[0].addEventListener('click',()=>{
    setCatalog(allCatalogs)
})
seasones[1].addEventListener('click',()=>{
    setCatalog(summerCatalog)
})
seasones[2].addEventListener('click',()=>{
    setCatalog(autumnCatalog)
})
seasones[3].addEventListener('click',()=>{
    setCatalog(winterCatalog)
})
seasones[4].addEventListener('click',()=>{
    setCatalog(springCatalog)
})

