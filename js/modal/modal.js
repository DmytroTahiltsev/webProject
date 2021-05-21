const obj={
    content:`
    <form id="feedback-form" name="feedback" action="">
        <input class="modal-input" type="text" placeholder="Ваше имя">
        <br>
        <input class="modal-input" type="email" placeholder="Ваш email">
        <br>
        <textarea class="modal-input" name="" id="" cols="30" rows="10"></textarea>
        <br>
        <input class="modal-input modal-submit"  type="submit">
    </form>
    `,
    title:`Задайте нам вопрос`,
    banner:'img/modal/banner.jpeg',
    closable:true,
    width:'70%',
    footer:{
        content:`
            Journe\u{0027}er 2021 — ∞
        `
    },
    adaptiveModalWidth(){
        if(screen.width<=450){
            this.width='95vw';
        }
    }
};
obj.adaptiveModalWidth();
const globalObj={}

function _createModalFooter(footer){
    const _footer=document.createElement('div');
    _footer.classList.add('modal-footer');
    _footer.innerHTML=`
        ${footer.content}
    `
    return _footer;
   
   }
   function _createModal(options){
    const modal=document.createElement('div');
    modal.classList.add('dmodal');
    modal.innerHTML=`
       <div class="modal-overlay" data-close="1">
         <div class="modal-window" style="width: ${options.width || '600px'}">
           <div class="modal-header">
               <span class="modal-title">${options.title || 'title'}</span>
               ${options.closable ? `<span class="modal-close" data-close="1">&times;</span>` : ''} 
           </div>
           <div class="modal-body" data-content="1">
               ${options.content || ''}
               <div class="modal-banner">
                    <img src=${options.banner} alt="1"/>
               </div>
           </div>
         </div>
       </div>`;
       const footer=_createModalFooter(options.footer);
       modal.querySelector('.modal-body').after(footer);
       document.body.querySelector('script').before(modal);
       return modal;
   }
   globalObj.modal=function(options){
       const _modal=_createModal(options);
       let closing=false;
       let destroyed=false;
       const modal={
           open(){
               if(destroyed){
                   console.log('destroyed');
                   return;
               }
               if(!closing) _modal.classList.add('open');
           },
           close(){
               closing=true;
               _modal.classList.remove('open');
               _modal.classList.add('hide');
               setTimeout(()=>{
                   _modal.classList.remove('hide');
                   closing=false;
               },500);
           },
           destroy(){
               _modal.remove();
               _modal.removeEventListener('clicked', handler);
               destroyed=true;
           },
           setContent(html){
               _modal.querySelector('[data-content="1"]').innerHTML=html;
           },
       };
       const handler = event=>{
           if(event.target.dataset.close==1)modal.close();
       };
       _modal.addEventListener('click',handler);
       return modal;
   
   
   }

const modalWindow=globalObj.modal(obj);




   function setElementsListener(elements){
    for(elem of elements){
        elem.addEventListener('click', () => {
            modalWindow.open()
        });
    }
}

const orderButtons=document.querySelectorAll('.call-button');
setElementsListener(orderButtons);
