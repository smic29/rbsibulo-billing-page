import numberToWords from 'number-to-words';

const FormatService = {

    formatCurrency: function(amount, currency = 'PHP') {
        if (currency !== 'USD') {
            currency = 'PHP'
        }

        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: currency,
        })
    },

    wordConvert: function(number) {
        const wholeNum = Math.floor(number);
        const decimalNum = Math.round((number - wholeNum) * 100);

        const wholeWords = numberToWords.toWords(wholeNum);
        const formattedFraction = `${wholeWords} ${decimalNum === 0 ? '' : `and ${decimalNum} / 100`} pesos only`

        return formattedFraction.toLocaleUpperCase();
    }
}

export default FormatService;