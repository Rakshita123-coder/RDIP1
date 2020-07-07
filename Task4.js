
<script> 
  
// JavaScript code to perform modulo (%) 
// operation on positive numbers 
      
// mod() function 
Number.prototype.mod = function(a) { 
      
    // Calculate 
    return this % a; 
} 
      
// Driver code 
var x = 21; 
var b = 4; 
  
// Call mod() function 
var result = x.mod(b); 
      
// Print result 
document.write("The outcome is: " + result); 
</script>