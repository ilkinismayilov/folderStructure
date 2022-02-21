// http://127.0.0.1:5500/js/db.json

fetch('http://127.0.0.1:5500/js/db.json') 
 .then( (res) => res.json() ) 
 .then( (output => { var json = output.data; 


json.forEach(element => {

    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const div = document.createElement('div');
    const a = document.createElement('a');
    const span = document.createElement('span');
    const i = document.createElement('i');

        if(element.name.includes('.')){
            li.classList.add('list-item');
            li.appendChild(div);
            div.classList.add('list-label');
            div.appendChild(a);
            a.setAttribute('href',"/");
            a.appendChild(i);
            i.classList.add('fa-solid','fa-code', `${element.className}` ); 
            a.appendChild(span);
            span.textContent=`${element.name}`;

        }else{
            li.classList.add('list-item');
            li.appendChild(div);
            div.classList.add('list-label');
            div.appendChild(a);
            a.setAttribute('href',"/");
            a.appendChild(i);
            i.classList.add('fa-regular','fa-folder', `${element.className}` ); 
            a.appendChild(span);
            span.textContent=`${element.name}`;

            if(element.children){
                var el = element.children;
                if(element.name === 'css'){

                    el.forEach(elem => {
                        const liInside = document.createElement('li');
                        const aInside = document.createElement('a');
                        const spanInside = document.createElement('span');
                        const iInside = document.createElement('i');
                        
                        li.appendChild(ul);
                        ul.classList.add('list');
                        ul.appendChild(liInside)
                        liInside.classList.add('list-item');
                        liInside.appendChild(aInside)
                        aInside.setAttribute('href',"/");
                        aInside.appendChild(iInside);
                        iInside.classList.add('fa-brands','fa-css3-alt'); 
                        aInside.appendChild(spanInside);
                        spanInside.textContent= elem.name;
                        console.log(spanInside);
                    });
                     
                }else if(element.name === 'js'){
                    
                    el.forEach(elem => {
                        const liInside = document.createElement('li');
                        const aInside = document.createElement('a');
                        const spanInside = document.createElement('span');
                        const iInside = document.createElement('i');
                        
                        li.appendChild(ul);
                        ul.classList.add('list');
                        ul.appendChild(liInside)
                        liInside.classList.add('list-item');
                        liInside.appendChild(aInside)
                        aInside.setAttribute('href',"/");
                        aInside.appendChild(iInside);
                        iInside.classList.add('fa-brands','fa-js-square'); 
                        aInside.appendChild(spanInside);
                        spanInside.textContent= elem.name;
                        console.log(spanInside);
                    });

                }else if(element.name === 'img'){
                    el.forEach(elem => {
                        const liInside = document.createElement('li');
                        const aInside = document.createElement('a');
                        const spanInside = document.createElement('span');
                        const iInside = document.createElement('i');
                        
                        li.appendChild(ul);
                        ul.classList.add('list');
                        ul.appendChild(liInside)
                        liInside.classList.add('list-item');
                        liInside.appendChild(aInside)
                        aInside.setAttribute('href',"/");
                        aInside.appendChild(iInside);
                        iInside.classList.add('fa-regular','fa-file-image'); 
                        aInside.appendChild(spanInside);
                        spanInside.textContent= elem.name;
                        console.log(spanInside);
                    });
                }
            
            }
         
          

        }
        document.getElementById('list').appendChild(li);

});

}))