let Baseurlupload='http://120.76.123.231:9098/api/FileUpload/UploadFile';
let BaseUrl='http://120.76.123.231:9098';
function limitVal(val,n){
  let returnValue = [];
  if (val != null && val.length > n) {
    let cont = val.substring(0, n);
    returnValue = cont + "...";
  } else if (val == null) {
    returnValue = returnValue;
  } else {
    returnValue = val;
  }
  return returnValue;
}
export default {
  limitVal,Baseurlupload,BaseUrl
}
