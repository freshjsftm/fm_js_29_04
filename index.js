"use strict"; 

function show(header){
  console.log(this)
  console.log(header,'|', this.title);
}

const site = {
  title:'Green site', 
  headers:['Title 1', 'About us', 'Portfolio'],
  showHeaders(){
    console.log(this);
    const test = show.bind(this);
    console.dir(test);
    this.headers.forEach(test);
  }
};

site.showHeaders();


