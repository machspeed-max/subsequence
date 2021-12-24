function strLen(str) {
    let strLength = 0;
    while (str[strLength] != undefined) {
        strLength++;
    }
    return strLength;
}

function subsequence(str1, str2) {
    let subsqnc1 = "";
    let subsqnc2 = "";
    let result = "";
    let strLen1 = strLen(str1);
    let strLen2 = strLen(str2);
    let subsqncLen1 = strLen(subsqnc1);
    let subsqncLen2 = strLen(subsqnc2);

    for (x = 0; x < strLen1; x++) {
        for (y = 0; y < strLen2; y++) {
            if (str1[x] == str2[y]) {
                if (x <= y) {
                    subsqnc1 += str1[x];
                }
                if (x >= y) {
                    subsqnc2 += str1[x];
                }
            }
        }
    }

    if (subsqncLen1 == subsqncLen2 && subsqnc1 == subsqnc2){
        result = `"${subsqnc1}"`;
    }
    if (subsqncLen1 == subsqncLen2 && subsqnc1 != subsqnc2) {
        result = `"${subsqnc1}", "${subsqnc2}"`;
    }
    if (subsqncLen1 > subsqncLen2) {
        result = `"${subsqnc1}"`;
    }
    if (subsqncLen1 < subsqncLen2) {
        result = `"${subsqnc2}"`;
    }
    console.log(`Parameter: "${str1}", "${str2}"`);
    console.log(`Output: ${result}`);
}
subsequence("abcd", "abed");
subsequence("ajblqcpdz", "aefcnbtdi");