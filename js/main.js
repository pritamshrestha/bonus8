var myhome=[
{   homeno:"5",
	owner:"suchana",
	image:"img/suchana.png"
},
{   homeno:"10",
	owner:"prisumsa",
	image:"img/prisumsa.jpg"
},
{   homeno:"20",
	owner:"pritam",
	image:"img/suchana.jpg"
}
]
  function myfunction(){
 	var homeno=document.getElementById('homeno').value.toLowerCase()
 	for(i=0;i<myhome.length;i++){
 		if(homeno===myhome[i].homeno){
 		document.getElementById('one').innerHTML= "This is your house no: "+ myhome[i].homeno
 		document.getElementById('three').innerHTML="I am house owner "+ myhome[i].owner
 		document.getElementById('two').src=myhome[i].image
 		return
 	}
 	else{
 		document.getElementById('one').innerHTML="Enter the house no again 5,10 or 20"
 		document.getElementById('two').src=""
 		document.getElementById('three').innerHTML="Try again"

 	}


}
}
