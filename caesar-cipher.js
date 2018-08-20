
function genCharArray(charA, charZ) {
	// letter to num
	// char
	// char code at
	// index 
	let a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
		// num to letter
		// string
		// from char code
		// index
  	a.push(String.fromCharCode(i));
  }
  return a;
}


// len, reguar match, a-z, i
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

// to upper, then vs
function isUpper(mychar) {
	if (mychar == mychar.toUpperCase()) {
 		return true;	
	} else {
		return false;
	}
}


function getArrIndex(arr, item) {
	for(let i=0; i<arr.length; i++) {
		let t = arr[i];
		if(t == item) {
			return i;
		} else {
			// con
		}
	}

	return false;
}


function caesarCipher(s, k) {
	k = Number(k);
	let azArr = genCharArray('a', 'z');
	let AZArr = genCharArray('A', 'Z');
	const len = azArr.length;
	let posi;
	let letter;

	// lower
	let azBuf = [];
	for(let i=0; i<len; i++) {
		posi = (i+k) % len;
		letter = azArr[posi];
		azBuf[i] = letter;
	} // end loop

	// upper
	let AZBuf = [];
  for(let i=0; i<len; i++) {
    let posi = (i+k) % len;
    let letter = AZArr[posi];
    AZBuf[i] = letter;
  } // end loop


	let inArr = s.split('');
	let buf = [];
	for(let i=0; i<inArr.length; i++) {
		let t = inArr[i];

		if(isLetter(t)) {
			if(isUpper(t)) {
				posi = getArrIndex(AZArr, t);;
				letter = AZBuf[posi];
			} else {
				posi = getArrIndex(azArr, t);
        letter = azBuf[posi];
			}
			buf[i] = letter;
		} else {
			buf[i] = t;
		}	

	} // end loop

	return buf.join('');
}


let s = 'middle-Outz';
let k = '2';
let out = caesarCipher(s, k);
console.log(out);
