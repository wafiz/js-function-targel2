function sort()
{
   var array=[],x,y;
	d=document.getElementById("numb1").value;
	e=document.getElementById("numb2").value;
	f=document.getElementById("numb3").value;
array[0]=d;
 array[1]=e;  
 array[2]=f; 
        var x,y;
        	if(array[0]>array[1]){
        		x=array[0];
        		array[0]=array[1];
        	array[1]=x;
        	}
             if (array[1]>array[2]){
        		x=array[1];
        		array[1]=array[2];
        	array[2]=x;
        	x=0;
        	}
        	 if(array[0]>array[1]){
        		x=array[0];
        		array[0]=array[1];
        	array[1]=x;
        	}
        
 document.getElementById('test').innerHTML =   array;
  
}
