// http://127.0.0.1:5500/js/db.json

fetch('js/db.json') 
 .then( (res) => res.json() ) 
 .then( (output => { var json = output.data; 
  // console.log(json);
   

    for (let j = 0; j < json.length; j++) {

        const element = json[j];
        // console.log(element.name);

        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const div = document.createElement('div');
        const a = document.createElement('a');
        const span = document.createElement('span');
        const i = document.createElement('i');
        const button = document.createElement('button');

        if(element.className == 'cssFolder'){

          div.addEventListener("click",displayDate1);
        
        }else if(element.className == 'jsFolder'){

          div.addEventListener("click",displayDate2)

        }else if(element.className == 'imgFolder'){

          div.addEventListener("click",displayDate3)

        }

        if(element.name.includes('.')){
          li.classList.add('list-item');
          li.appendChild(div);
          div.classList.add('list-label');
          div.appendChild(a);
          div.addEventListener("click",clickElement)
          a.setAttribute('href',"#");
          a.appendChild(i);
          i.classList.add('fa-solid','fa-code', `${element.className}` );
          a.appendChild(span);
          span.textContent=`${element.name}`;

        }else{
          li.classList.add('list-item');
          li.setAttribute('id',`${element.className}`);
          li.appendChild(div);
          div.classList.add('list-label');
          div.appendChild(a);
          a.setAttribute('href',"#");
          a.appendChild(i);
          i.classList.add('fa-regular','fa-folder', `${element.className}` ); 
          a.appendChild(span);
          span.textContent=`${element.name}`;
          // div.addEventListener("click",displayDate)
        }
        document.getElementById('list').appendChild(li);
    }

   
    let css = 0;
    let js = 0;
    let img = 0;

    function displayDate1(){
      console.log("css toggle");
      
      if(css == 0 ){
    
            
        const ul = document.createElement('ul');
        
        for (let i = 0; i < json[1].children.length; i++) {
          
          var elem = json[1].children[i]          
    
          const liInside = document.createElement('li');
          const aInside = document.createElement('a');
          const spanInside = document.createElement('span');
          const iInside = document.createElement('i');
          const iDel = document.createElement('i');
    
          ul.classList.add('list');
          ul.setAttribute('id',"toggleCss");
          ul.appendChild(liInside)
          liInside.classList.add('list-item');
          liInside.appendChild(aInside)
          aInside.addEventListener("click",clickElement)
          aInside.setAttribute('href',"#");
          aInside.appendChild(iInside);
          iInside.classList.add('fa-brands','fa-css3-alt');


          aInside.appendChild(spanInside);
          spanInside.textContent= elem.name;
          
          console.log(spanInside);
          console.log(ul);
    
        }        
        document.getElementById(`${json[1].className}`).appendChild(ul);
        
        return css = css+1;
      }else{
        $("#toggleCss").toggle(1000);
      }
    }
    function displayDate2(){
      console.log("js toggle")
      
      if(js == 0 ){
    
            
        const ul = document.createElement('ul');
        
        for (let i = 0; i < json[2].children.length; i++) {
          
          var elem = json[2].children[i]          
    
          const liInside = document.createElement('li');
          const aInside = document.createElement('a');
          const spanInside = document.createElement('span');
          const iInside = document.createElement('i');
          const iDel = document.createElement('i');
    
          ul.classList.add('list');
          ul.setAttribute('id',"toggleJs");
          ul.appendChild(liInside)
          liInside.classList.add('list-item');
          liInside.appendChild(aInside)
          aInside.addEventListener("click",clickElement)
          aInside.setAttribute('href',"#");
          aInside.appendChild(iInside);
          iInside.classList.add('fa-brands','fa-js-square'); 
          aInside.appendChild(spanInside);
          spanInside.textContent= elem.name;
          
          console.log(spanInside);
          console.log(ul);
    
        }        
        document.getElementById(`${json[2].className}`).appendChild(ul);
        
        return js = js+1;
      }else{
        $("#toggleJs").toggle(1000);
      }
    }
    function displayDate3(){
      
      

      console.log("img toggle")
      
      if(img == 0 ){
    
            
        const ul = document.createElement('ul');
        
        for (let i = 0; i < json[3].children.length; i++) {
          
          var elem = json[3].children[i]          
    
          const liInside = document.createElement('li');
          const aInside = document.createElement('a');
          const spanInside = document.createElement('span');
          const iInside = document.createElement('i');
    
          ul.classList.add('list');
          ul.setAttribute('id',"toggleImg");
          ul.appendChild(liInside)
          liInside.classList.add('list-item');
          liInside.appendChild(aInside)
          aInside.addEventListener("click",clickElement)
          aInside.setAttribute('href',"#");
          aInside.appendChild(iInside);
          iInside.classList.add('fa-regular','fa-file-image'); 
          aInside.appendChild(spanInside);
          spanInside.textContent= elem.name;
          
          console.log(spanInside);
          console.log(ul);
    
        }        
        document.getElementById(`${json[3].className}`).appendChild(ul);
        
        return img = img+1;
      }else{
        $("#toggleImg").toggle(1000);
      }
    }
    function clickElement(){
      alert("Clicked");
    }
   
    document.getElementsByTagName("button")[0].addEventListener("click",createFolderElement);
    
    function createFolderElement(){
      var txt = document.getElementById("text_id").value;
      var select = document.getElementById("folder").value;
      console.log(select);

      for (let i = 0; i < json.length; i++) {
        const element = json[i];
        // console.log(element)
        if(txt === element.name){
          alert("Can not be same name");
            return;         
        }
        
        for (let k = 0; k < element.children.length; k++) {
          var check = element.children[k].name;

          if(txt === check){
            alert("Can not be same name");
            return;         
          }
        } // inside for end

      } // for end
      
      const liNew = document.createElement('li');
      const divNew = document.createElement('div');
      const aNew = document.createElement('a');
      const spanNew = document.createElement('span');
      const iNew = document.createElement('i');

      if(txt.trim() === ''){
        alert("can't be empty");
      }else{

        if(txt.includes('.')){

          if (select === '') {
            
            liNew.classList.add('list-item');
            liNew.appendChild(divNew);
            divNew.classList.add('list-label');
            divNew.appendChild(aNew);
            divNew.addEventListener("click",clickElement)
            aNew.setAttribute('href',"#");
            aNew.appendChild(iNew);
            iNew.classList.add('fa-solid','fa-code' ); 
            aNew.appendChild(spanNew);
            spanNew.textContent=txt;

            document.getElementById('list').appendChild(liNew);
            
          }else{
            liNew.classList.add('list-item');
            liNew.appendChild(divNew);
            divNew.classList.add('list-label');
            divNew.appendChild(aNew);
            divNew.addEventListener("click",clickElement)
            aNew.setAttribute('href',"#");
            aNew.appendChild(iNew);
            iNew.classList.add('fa-solid','fa-code' ); 
            aNew.appendChild(spanNew);
            spanNew.textContent=txt;

            if (select === 'css') {
              document.getElementById('toggleCss').appendChild(liNew);
            }else if(select === 'js'){
              document.getElementById('toggleJs').appendChild(liNew);
            }else if(select === 'img'){
              document.getElementById('id="toggleImg"').appendChild(liNew);
            }
            
            
          }
 
          // liNew.classList.add('list-item');
          // liNew.appendChild(divNew);
          // divNew.classList.add('list-label');
          // divNew.appendChild(aNew);
          // divNew.addEventListener("click",clickElement)
          // aNew.setAttribute('href',"#");
          // aNew.appendChild(iNew);
          // iNew.classList.add('fa-solid','fa-code' ); 
          // aNew.appendChild(spanNew);
          // spanNew.textContent=txt;
    
        }else{

          if (select === '') {
            
            liNew.classList.add('list-item');
          // liNew.setAttribute('id',`${element.className}`);
            liNew.appendChild(divNew);
            divNew.classList.add('list-label');
            divNew.appendChild(aNew);
            aNew.setAttribute('href',"#");
            aNew.appendChild(iNew);
            iNew.classList.add('fa-regular','fa-folder' ); 
            aNew.appendChild(spanNew);
            spanNew.textContent=txt;

            document.getElementById('list').appendChild(liNew);
            
          }else{
            liNew.classList.add('list-item');
            // liNew.setAttribute('id',`${element.className}`);
            liNew.appendChild(divNew);
            divNew.classList.add('list-label');
            divNew.appendChild(aNew);
            aNew.setAttribute('href',"#");
            aNew.appendChild(iNew);
            iNew.classList.add('fa-regular','fa-folder' ); 
            aNew.appendChild(spanNew);
            spanNew.textContent=txt;

            if (select === 'css') {
              document.getElementById('toggleCss').appendChild(liNew);
            }else if(select === 'js'){
              document.getElementById('toggleJs').appendChild(liNew);
            }else if(select === 'img'){
              document.getElementById('id="toggleImg"').appendChild(liNew);
            }
            
            
          }

          // liNew.classList.add('list-item');
          // // liNew.setAttribute('id',`${element.className}`);
          // liNew.appendChild(divNew);
          // divNew.classList.add('list-label');
          // divNew.appendChild(aNew);
          // aNew.setAttribute('href',"#");
          // aNew.appendChild(iNew);
          // iNew.classList.add('fa-regular','fa-folder' ); 
          // aNew.appendChild(spanNew);
          // spanNew.textContent=txt;

          // document.getElementById('list').appendChild(liNew);
        }
        // document.getElementById('list').appendChild(liNew);
      }
      document.getElementById("text_id").value = '';
  } // createFolderElement function end

  



}))




