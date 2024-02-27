function copyCoupon(button) {
  var couponInput = button.parentElement.querySelector('.coupon-text');
  if (couponInput) {
    couponInput.select();
    document.execCommand('copy');
  } else {
    console.error('Coupon input not found');
  }
}


function copyBatchCoupon(batchCoupon) {
  var couponInput = document.createElement('input');
  couponInput.value = batchCoupon;
  document.body.appendChild(couponInput);
  couponInput.select();
  document.execCommand('copy');
  document.body.removeChild(couponInput);
}

function copyBatchCoupon2(batchCoupon) {
  var couponInput = document.createElement('input');
  couponInput.value = batchCoupon;
  document.body.appendChild(couponInput);
  couponInput.select();
  document.execCommand('copy');
  document.body.removeChild(couponInput);
}

copyBatchCoupon();
copyBatchCoupon2();
function generateBatchCoupons() {
  var batchCouponsData = [
    { batch: 'PW SAARTHI COUPON', code: 'AK150' },
    { batch: 'UPSC WALLAH COUPON', code: 'PW2023' },
    { batch: 'PW GATE WALLAH COUPON', code: 'SKGA155' },
    { batch: 'PW TEST SERIES COUPON', code: 'PW2023' },
    { batch: 'PW VIDYAPEETH OFFLINE', code: '7987BONV' },
    { batch: 'BANKING WALLAH COUPON', code: 'PW2023' },
    { batch: 'PW JEE COUPON', code: 'AK150' },
    { batch: 'PW MBA WALLAH', code: 'AKBE50' },
  ];

  var batchCouponsBody = document.getElementById('batchCouponsBody');

  
  batchCouponsBody.innerHTML = '';


  batchCouponsData.forEach(function (coupon) {
    var row = batchCouponsBody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = coupon.batch;
    cell2.innerHTML = coupon.code;
    cell3.innerHTML = '<button class="coupon-button" onclick="copyBatchCoupon(\'' + coupon.code + '\')">Copy</button>';
  });
}

generateBatchCoupons();

function generateBatchCoupons2() {
  var batchCouponsData2 = [
    { batch: 'JEE', code: 'AK150' },
    { batch: 'NEET', code: 'AK150' },
    { batch: 'UPSC', code: 'AK150' },
    { batch: 'UPSC OFFLINE', code: 'PW2023' },
    { batch: 'PW GATE BATCH', code: 'SKGA155' },
    { batch: 'BANKING WALLAH COUPON', code: 'PW2023' },
    { batch: 'MBA BATCH', code: 'AKBE50' },
    { batch: 'School (K-12)', code: 'PW2023' },
    { batch: 'PW SAARTHI', code: '7987BONV' },
    { batch: 'Defence', code: 'PW2023' },
    { batch: 'Commerce', code: 'AK150' },
    { batch: 'PW CSIR NET', code: 'AKBE20' },
    { batch: 'PW IIT JAM', code: 'AKBE10' },
    { batch: 'STATE PSC', code: 'PW2023'}, 
    { batch: 'LAW', code: 'AK150' },
    { batch: 'AE/JE', code: 'PW2023'}, 
    { batch: 'CUET', code: 'AK150' },
  ];

var batchCouponsBody2 = document.getElementById('batchCouponsBody2');

  
  batchCouponsBody2.innerHTML = '';


  batchCouponsData2.forEach(function (coupon) {
    var row = batchCouponsBody2.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = coupon.batch;
    cell2.innerHTML = coupon.code;
    cell3.innerHTML = '<button class="coupon-button" onclick="copyBatchCoupon2(\'' + coupon.code + '\')">Copy</button>';
  });
}

generateBatchCoupons2();

    

const menuBtn = document.querySelector(".menu-icon span");
     const searchBtn = document.querySelector(".search-icon");
     const cancelBtn = document.querySelector(".cancel-icon");
     const items = document.querySelector(".nav-items");
     const form = document.querySelector("form");
     menuBtn.onclick = ()=>{
       items.classList.add("active");
       menuBtn.classList.add("hide");
       searchBtn.classList.add("hide");
       cancelBtn.classList.add("show");
     }
     cancelBtn.onclick = ()=>{
       items.classList.remove("active");
       menuBtn.classList.remove("hide");
       searchBtn.classList.remove("hide");
       cancelBtn.classList.remove("show");
       form.classList.remove("active");
       cancelBtn.style.color = "#ff3d00";
     }
     searchBtn.onclick = ()=>{
       form.classList.add("active");
       searchBtn.classList.add("hide");
       cancelBtn.classList.add("show");
     }

