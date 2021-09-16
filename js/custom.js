console.log('* Custom.js *');

const btnSubmit     = document.querySelector('#btnSubmit');
const txtUserName   = document.querySelector('#userName');
const txtUserEmail  = document.querySelector('#userEmail');
const txtUserMobile = document.querySelector('#userMobile');
const selectCar     = document.querySelector('#selectCar');

const alertSuccess  = document.querySelector('#alert-success');
const alertDanger   = document.querySelector('#alert-danger');

txtUserName.addEventListener('blur',wcUserNameValidation);
function wcUserNameValidation()
{
  let regex = /([0-9]{2})([a-zA-z]{2,5})([0-9]{2})$/; 
  if(regex.test(txtUserName.value))
  {
    txtUserName.classList.remove('is-invalid')
    txtUserName.setAttribute('data-validation', 'true');
  }
  else
  {
    txtUserName.classList.add('is-invalid')
    txtUserName.setAttribute('data-validation', 'false');
  }
}

txtUserEmail.addEventListener('blur',wcUserEmailValidation);
function wcUserEmailValidation()
{
  let regex = /((^[0-9]{2})([0-9a-zA-Z]+)([0-9]{2}))@(([a-zA-Z]{2})([0-9]+)([a-zA-Z]{2}))\.([a-zA-Z]{3})$/;
  
  if(regex.test(txtUserEmail.value))
  {
    txtUserEmail.classList.remove('is-invalid');
    txtUserEmail.setAttribute('data-validation', 'true');
  }
  else
  {
    txtUserEmail.classList.add('is-invalid');
    txtUserEmail.setAttribute('data-validation', 'false');
  }
}

txtUserMobile.addEventListener('blur',wcUserMobileValidation);
function wcUserMobileValidation()
{
  let regex = /[0-9]{10}/;
  
  if(regex.test(txtUserMobile.value))
  {
    txtUserMobile.classList.remove('is-invalid');
    txtUserMobile.setAttribute('data-validation', 'true');
  }
  else
  {
    txtUserMobile.classList.add('is-invalid');
    txtUserMobile.setAttribute('data-validation', 'false');
  }
}

txtUserMobile.onkeypress = function(e) 
{
  if((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122))
  {
		return false;
	}
};

function wcUserCarValidation()
{
  let value = selectCar.options[selectCar.selectedIndex].value;
  if(value==0)
  {
    selectCar.classList.add('is-invalid')
    selectCar.setAttribute('data-validation', 'false');
  }
  else
  {
    selectCar.classList.remove('is-invalid')
    selectCar.setAttribute('data-validation', 'true');
  }
}

function wcFormvalidation()
{
  console.log('* wcFormvalidation *');
  wcUserCarValidation();
  wcUserNameValidation();
  wcUserEmailValidation();
  wcUserMobileValidation();

  if(txtUserName.getAttribute('data-validation') == 'true' &&
      txtUserEmail.getAttribute('data-validation') == 'true' &&
      txtUserMobile.getAttribute('data-validation') == 'true' &&
      selectCar.getAttribute('data-validation') == 'true' )
  {
    console.log('All fine'); 
    alertSuccess.style.display = 'block';
    alertDanger.style.display = 'none';
  }
  else
  {  
    console.log('Not all fine');
    alertSuccess.style.display = 'none';
    alertDanger.style.display = 'block';
  }
}

btnSubmit.addEventListener('click',function(e)
{
  e.preventDefault();
  console.log('btnSubmit is clicked!');
  wcFormvalidation();
});