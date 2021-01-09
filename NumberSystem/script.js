$(document).ready(function()
{
 //alert(" I am");
 $('#cal').click(function(){
    // alert('hdh');
     $('.calculator').addClass('active');
     
 });

 $('#close').click(function()
 {
    $('.calculator').removeClass('active');
 });

 // For calculator color changing
$('#color').change(function(e)
{
       $('.calculator').css("background",this.value);
})
$(document).keydown(function(e)
{
  //alert(e.keyCode);
    if(e.keyCode==67)
    clearData();
    var nums=[48,49,50,51,52,53,54,55,56,57,187,189,96,97,98,99,100,101,102,103,104,105,106,107,109,110,111];
    var res=[0,1,2,3,4,5,6,7,8,9,'+','-',0,1,2,3,4,5,6,7,8,9,'*','+','-','.','/'];
    var len=nums.length;
    const vc=e.keyCode;
    var v=document.getElementById('inputval').value;
    if(e.keyCode==80)
    calPower(v);
    if(e.keyCode==83)
    calSqrt(v);
    if((vc>=48 && vc<=57) || (vc>=96 && vc<=111) || vc==187 || vc==189){
    var ind=nums.indexOf(e.keyCode);
    var ii="#"+res[ind];
   // addBorderClass(ii);
    //console.log(res[ind]);
    //console.log(v);
    addEquation(v,res[ind]);

}
  if(vc==8)
  {
     backSpace(v);
  }
  if(vc==13)
  {
     cal(v);
  }
});  // ENd fof keyup

$('#p').click(function()
{
    
    calPower( document.getElementById('inputval').value);
}
);
$('#s').click(function()
{
    
    calSqrt( document.getElementById('inputval').value);
}
);

function calSqrt(v)
{
   alert('I am ');
   var s=Math.sqrt(eval(v));
   $("res").val(s);
}
function calPower(v)
{

   var s=0;
  s= (Math.pow(v,2));
   $("res").val(s);
}

$("#1").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'1');

}
);
$("#2").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'2');

}
);
$("#3").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'3');

}
);
$("#4").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'4');

}
);
$("#5").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'5');

}
);
$("#6").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'6');

}
);
$("#7").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'7');

}
);
$("#8").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'8');

}
);
$("#9").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'9');

}
);
$("#0").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'0');

}
);
$("#dot").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'.');

}
);
$("#a").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'+');

}
);
$("#s").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'-');

}
);
$("#m").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'*');

}
);
$("#d").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'/');

}
);
$("#r").click(function(e)
{
   var v=document.getElementById('inputval').value;
   addEquation(v,'%');

}
);
$("#e").click(function(e)
{
   var v=document.getElementById('inputval').value;
   cal(v);
}
);

// Adding number using buttons
function backSpace(v)
{
   var str='';
   for(i=0;i<v.length-1;i++)
   str+=v.charAt(i);
   $('#inputval').val(str);
}
 
function cal(v)
{
   if(v.charAt(v.length-1)=='+'||v.charAt(v.length-1)=='-'||v.charAt(v.length-1)=='*'||v.charAt(v.length-1)=='/')
   return;
   $('#inputval').val(eval(v));
    v+="="+(eval(v));
   $('#res').val(v);
   
}
//
function addEquation(v,vv)
{
   if((v.charAt(v.length-1)=='+'||v.charAt(v.length-1)=='-'||v.charAt(v.length-1)=='*'||v.charAt(v.length-1)=='/')
   && (vv=='+'||vv=='-'||vv=='/'||vv=='*')
  )
  {
    var str='';
    for(i=0;i<v.length-1;i++)
    str+=v.charAt(i);
    str+=vv;
    v=str;
  }
  else
  v+=vv;
 $('#inputval').val(v);
}

$('#clear').click(function(){
clearData();
});
function clearData()
{
   $('#res').val('');
   $('#inputval').val('');
}
// End of bidy
}
);