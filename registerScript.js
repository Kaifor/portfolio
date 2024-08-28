

let hashedReturn = document.getElementById("hashedReturn");
let username = document.getElementById("username");
let password = document.getElementById("password");
let realm = document.getElementById("realm");
let method = document.getElementById("method");
let digestUri = document.getElementById("digestUri");
let nonce = document.getElementById("nonce");

let sip_username;
let sip_password;
let sip_realm;
let sip_method;
let sip_digestUri;
let sip_nonce;
let sip_ha1;
let sip_ha2;
let enc_ha1;
let enc_ha2;
let nonce_value;



formAnswers.addEventListener("click", function(event)
{
    sip_username = username.value.toString();
    sip_password = password.value.toString();
    sip_realm = realm.value.toString();
    sip_method = method.value.toUpperCase();
    sip_digestUri = digestUri.value.toString();
    sip_nonce = nonce.value.toString();

    username.value = "";
    password.value = "";
    realm.value = "";
    method.value = "";
    digestUri.value = "";
    nonce.value = "";

    sip_ha1 = sip_username + ":" + sip_realm + ":" + sip_password;
    enc_ha1 = CryptoJS.MD5(sip_ha1).toString();

    console.log("enc_ha1 = " + enc_ha1);

    sip_ha2 = sip_method + ":" + sip_digestUri;
    enc_ha2 = CryptoJS.MD5(sip_ha2).toString();

    console.log("enc_ha2 = " + enc_ha2);


    let nonce_MD5 = enc_ha1 + ":" + sip_nonce + ":" + enc_ha2;
    console.log("ha1 + none + ha2 = : " + nonce_MD5);

    nonce_value = CryptoJS.MD5(nonce_MD5).toString();



    hashedReturn.textContent = "Your hashed value is: " + nonce_value;
});
