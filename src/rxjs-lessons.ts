import { Observable } from "rxjs";

const search$ = new Observable(observer =>{


  const search = document.getElementById('search')

   if(!search){
    observer.error('Element does not exists on the page')
    return;
   }
  search?.addEventListener('input',event =>{

    observer.next(event)
    observer.complete()
  })


});


search$.subscribe({
  next:value=>{
  console.log(value);
  },
  error:err => console.log(err),
  complete: ()=> {
    console.log('Event end')
  }
})



