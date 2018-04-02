function valid()
{
    var fnam=document.getElementById('fname').value;
    var email=document.getElementById('email').value;
    
     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(fnam=='')
    {
        alert("Please Enter Name!");
        document.getElementById('fname').focus();
        return false;
    }
    if(email=='')
    {
        alert("Please Enter email!");
        document.getElementById('email').focus();
            return false;
        
    }
    else if (reg.test(email) == false)
    {
            alert("Please Enter valid email!");
        document.getElementById('email').focus();
            return false;
           
        
        }
    if(tel=='')
    {
        alert("Please Enter Phone Number!");
        document.getElementById('tel').focus();
            return false;
        
    }
    
    }
