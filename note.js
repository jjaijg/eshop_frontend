// after post request to create product
/*
  1. in response, product id and metric is not passed
  2. but in _links.product.href -> we can call with projection to get prodcut with id and metric. whether this is configured correct?
  3. url with projection is coming like this 'products/3?{projection}
  4. for now we are manually editing this to add projection
*/

// How to update metric while editing product
/*
  1. need demo for this.
  2. we tried put request, with all prod detail and metric field with new metric url, but didn't worked.
  3. in already given demo, it is mntioned that metric for a product need to be udpate differently
  4. so required demo on that
*/

// for editing product we are facing some issue
/*
  1. to get tamil name, we hv one field to get englisg value, which is then convereted to tamil and sisplayed in another field.
  2. field gettting the english value will be empty while editing a produt 
  3. bcoz of this we are not able to submit the form as that field is set to required.
  4. Methods to resolve
    a. make that field as not required and mark the field receving tamil name as required - best
    b. add a field in product db to store the english value also. (not recommended)
*/
