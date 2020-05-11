let screen1 = document.querySelector( '#screen1' )
let screen2 = document.querySelector( '#screen2' )
let operateur, chiffre = 0

function getValue(value) {
	if ( screen2.textContent != '0' ) value = screen2.textContent + value
	screen2.textContent = value;
}

let pallette1 = document.querySelectorAll( '.pallette1 button' )
for (let i = 0 ; i < pallette1.length ; i++) {
	pallette1[i].addEventListener('click', function(e) {
		if ( i == 0 ) {
			screen1.textContent = '';
			screen2.textContent = '0';
			chiffre = 0;
		}
		if ( i == 1 ) {
			if ( screen2.textContent.length > 1 ) 
				screen2.textContent = screen2.textContent.substring(0, screen2.textContent.length - 1)
			else if (screen2.textContent.length == 1) screen2.textContent = '0'
		}
		if ( i == 2 ) {
			trans('!')
			operateur = '!'
		}
		if ( i == 3 ) trans('/')
	})
}

let operationPane = document.querySelectorAll( '.operationPane button' )
for (let i = 0 ; i < operationPane.length ; i++) {
	operationPane[i].addEventListener('click', function(e) {
		if ( i == 0 ) trans('x')
		if ( i == 1 ) trans('-')
		if ( i == 2 ) trans('+')
		if ( i == 3 ) {
			update = false;
			calcul();
			screen1.textContent = '';
			screen2.textContent = chiffre
			chiffre = 0
		}
	})
}

function calcul() {
	if ( operateur == '!' ) {
		chiffre = screen1.textContent.replace('!', '')
		chiffre = fact(chiffre)
	}
	else {
		if( screen2.textContent !== '' ) screen1.textContent = screen1.textContent + screen2.textContent
		screen1.textContent = screen1.textContent.replace('x', '*')
		chiffre = eval( screen1.textContent )
	}
}

function trans(sign) {
	screen1.textContent = screen1.textContent + screen2.textContent + ' ' + sign + ' '
	screen2.textContent = '0'
}

function fact(b) {
	if( b <= 1 ) return 1;
	else return b * fact( b - 1 );
}