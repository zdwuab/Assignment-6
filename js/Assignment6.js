function CreateCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url =  "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    
    //Collect customer data from web page
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;
    var customercity = document.getElementById("custcity").value;
    //Create the parameter string
    
    var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername + '","City":"' + customercity +'"}';
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText)
            OperationResult(result);
        }
    }
    
    
    //Start AJAX request
    objRequest.open("POST",url,true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
}

function OperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful!"
    }
    
    else
    {
        document.getElementById("result").innerHTML = "The operation was NOT successful." + "<br>" + output.Exception;
    }
}

function ChangeShipAddress()
{
    var objRequest2 = new XMLHttpRequest();
    var url2 = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    
    //Collect Address info
    
    var ordernumber = document.getElementById("ordernum").value;
    var Shipname = document.getElementById("shipname").value;
    var Shipaddress = document.getElementById("shipaddress").value;
    var Shipcity = document.getElementById("shipcity").value;
    var Shippostal = document.getElementById("shippostalcode").value;
    
    //Create parameter string
    
    var newshipaddrress = '{"OrderID":' + ordernumber + ',"ShipAddress":"' + Shipaddress + '","ShipCity":"' + Shipcity + '","ShipName":"' + Shipname + '","ShipPostcode":"' + Shippostal +'"}';
    
    objRequest2.onreadystatechange = function()
    {
        if (objRequest2.readyState == 4 && objRequest2.status == 200)
        {
            var result2 = JSON.parse(objRequest2.responseText)
            OperationResult2(result2);
        }
    }
    
    
    //Start AJAX request
    objRequest2.open("POST",url2,true);
    objRequest2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest2.send(newshipaddrress);

    function OperationResult2(output)
    {
    
    if (output == 1)
    {
        document.getElementById("result2").innerHTML = "The operation was successful!";
    }
    
    else
    {
        document.getElementById("result2").innerHTML = "The operation was NOT successful." + "<br>" + output.Exception;
    }

}
}

function DeleteCustomer()
{
  var objRequest3 = new XMLHttpRequest();
  var url3 = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
  url3 += document.getElementById("customerid").value;
  
  
     //Checks that the object has returned data 
    objRequest3.onreadystatechange = function() 
    { 
        if (objRequest3.readyState == 4 && objRequest3.status == 200) 
        { 
            var result3 = JSON.parse(objRequest3.responseText); 
            OperationResult3(result3); 
        }
        
    }
    
    //Initiate the server request 
    objRequest3.open("GET", url3, true);
    objRequest3.send(); 
}


    function OperationResult3(output)
    {
    
    if (output.DeleteCustomerResult.WasSuccessful == 1)
    {
        document.getElementById("result3").innerHTML = "The operation was successful!"
    }
    
    else
    {
        document.getElementById("result3").innerHTML = "The operation was NOT successful." + "<br>" + output.Exception;
    }
    
    }
    
function DeleteMenu()
{
    if (document.getElementById("delmenu").value == "Yes")
    {
       document.getElementById("delete").style.visibility = "visible";
    }
    else
    {
        document.getElementById("delete").style.visibility = "hidden";
    }
}
function SelectSection()
{
    if (document.getElementById("selection").value == "Display Section 1")
    {
        document.getElementById("Section1").style.visibility = "visible";
        document.getElementById("Section2").style.visibility = "hidden";
        document.getElementById("Section3").style.visibility = "hidden";
     }
     
     else if (document.getElementById("selection").value == "Display Section 2")
     {
        document.getElementById("Section1").style.visibility = "hidden";
        document.getElementById("Section2").style.visibility = "visible";
        document.getElementById("Section3").style.visibility = "hidden";
     }
     else if (document.getElementById("selection").value == "Display Section 3")
     {
        document.getElementById("Section1").style.visibility = "hidden";
        document.getElementById("Section2").style.visibility = "hidden";
        document.getElementById("Section3").style.visibility = "visible";
     }
     
     else
     {
        document.getElementById("Section1").style.visibility = "hidden";
        document.getElementById("Section2").style.visibility = "hidden";
        document.getElementById("Section3").style.visibility = "hidden";
     }
}
