function decimalToBinary(decimal) {
    let binary = "";
    for (let b = 128; b >= 1; b = b / 2) {
        if (b <= decimal) {
            decimal -= b
            binary += '1';
        } else {
            binary += '0';
        }
    }
    return binary;
}

console.log(decimalToBinary(1));

console.log(
    ` Décimal vers binaire
    ------------------------------------------------------------
    ${decimalToBinary(1)}   //  0	0	0	0	0	0	0	1
    
    ${decimalToBinary(2)}   //  0	0	0	0	0	0	1	0

    ${decimalToBinary(65)}  //  0	1	0	0	0	0	0	1

    ${decimalToBinary(66)}  //  0	1	0	0	0	0	1	0

    ${decimalToBinary(67)}  //  0	1	0	0	0	0	1	1

    ${decimalToBinary(97)}  //  0	1	1	0	0	0	0	1
    
    ${decimalToBinary(98)}  //  0	1	1	0	0	0	1	0

    ${decimalToBinary(99)}  //  0	1	1	0	0	0	1	1
    `
);

function binaryToDecimal(binary) {
    let decimal = 0;
    for (let i = 0, b = 128; i < binary.length; i++, b = b / 2) {
        if (binary[i] == 1) decimal += b;
    }
    return decimal;
}

console.log(
    ` Binaire vers décimal
    ------------------------------------------------------------
    ${binaryToDecimal('00000001')}   // 1
    
    ${binaryToDecimal('00000010')}   //  2

    ${binaryToDecimal('01000001')}  //  65

    ${binaryToDecimal('01000010')}  //  66

    ${binaryToDecimal('01000011')}  //  67

    ${binaryToDecimal('01100001')}  //  97
    
    ${binaryToDecimal('01100010')}  //  98

    ${binaryToDecimal('01100011')}  //  99
    `
);

//    ${decimalToHexadecimal(66)}
// 66 /16 = 4,125 -> nous ignorons ce qu'il y a après la virgule.
// 4*16 = 64
// % is the reminder
// 
function decimalToHexadecimal(decimal) {
    const hexa = '0123456789abcdef';
    return `0x${hexa[parseInt((decimal/16)%16)]}${hexa[decimal%16]}`;
}

console.log(
    ` Décimal vers hexadecimal
    ------------------------------------------------------------
    ${decimalToHexadecimal(1)}   //  0x01
    
    ${decimalToHexadecimal(2)}   //  0x02

    ${decimalToHexadecimal(35)}  //  0x23

    ${decimalToHexadecimal(37)}  //  0x25

    ${decimalToHexadecimal(43)}  //  0x2b

    ${decimalToHexadecimal(64)}  //  0x40

    ${decimalToHexadecimal(10)}  //  0x0a

    ${decimalToHexadecimal(13)}  //  0x0d

    ${decimalToHexadecimal(65)}  //  0x41

    ${decimalToHexadecimal(66)}  //  0x42

    ${decimalToHexadecimal(67)}  //  0x43

    ${decimalToHexadecimal(97)}  //  0x61
    
    ${decimalToHexadecimal(98)}  //  0x62

    ${decimalToHexadecimal(99)}  //  0x63
    `
);

function HexadecimalToDecimal(hexa) {
    let decimal = 0;
    hexa = hexa.replace('0x', '');
    let val = { 'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15 };
    decimal += parseInt((isNaN(hexa[1]) ? val[hexa[1]] : hexa[1]));
    decimal += parseInt((isNaN(hexa[0]) ? val[hexa[0]] : hexa[0])) * 16;
    return decimal;
}


function BinaryToHexadecimal(binary) {
    return decimalToHexadecimal(binaryToDecimal(binary));
}

function HexadecimalToBinary(hexa) {
    return decimalToBinary(HexadecimalToDecimal(hexa));
}


console.log(
    ` Hexadecimal vers décimal
    ------------------------------------------------------------
    ${HexadecimalToDecimal('0x01')}   //  1
    
    ${HexadecimalToDecimal('0x02')}   //  2

    ${HexadecimalToDecimal('0x23')}  //  35

    ${HexadecimalToDecimal('0x25')}  //  37

    ${HexadecimalToDecimal('0x2b')}  //  43

    ${HexadecimalToDecimal('0x40')}  //  64

    ${HexadecimalToDecimal('0x0a')}  //  10

    ${HexadecimalToDecimal('0x0d')}  //  13

    ${HexadecimalToDecimal('0x41')}  //  65

    ${HexadecimalToDecimal('0x42')}  //  66

    ${HexadecimalToDecimal('0x43')}  //  67

    ${HexadecimalToDecimal('0x61')}  //  97
    
    ${HexadecimalToDecimal('0x62')}  //  98

    ${HexadecimalToDecimal('0x63')}  //  99
    
    ${HexadecimalToDecimal('0xff')}  //  255
    `
);