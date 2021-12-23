function subsequence(str1, str2) {
    let subsqnc1 = "";
    let subsqnc2 = "";
    let strLength1 = 0;
    let strLength2 = 0;
    let subsqncLength1 = 0;
    let subsqncLength2 = 0;
    let result = "";
    
    while (str1[strLength1] != undefined) {
        strLength1++;
    }
    while (str2[strLength2] != undefined) {
    	strLength2++;
    }
    while (subsqnc1[subsqncLength1] != undefined) {
        subsqncLength1++;
    }
    while (subsqnc2[subsqncLength2] != undefined) {
        subsqncLength2++;
    }

    for (x = 0; x < strLength1; x++) {
        for (y = 0; y < strLength2; y++) {
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

    if (subsqncLength1 == subsqncLength2 && subsqnc1 == subsqnc2){
        result = `"${subsqnc1}"`;
    }
    if (subsqncLength1 == subsqncLength2 && subsqnc1 != subsqnc2) {
        result = `"${subsqnc1}" "${subsqnc2}"`;
    }
    if (subsqncLength1 > subsqncLength2) {
        result = `"${subsqnc1}"`;
    }
    if (subsqncLength1 < subsqncLength2) {
        result = `"${subsqnc2}"`;
    }
    console.log(`Parameter: "${str1}", "${str2}"`);
    console.log(`Output: ${result}`);
}
subsequence("abcd", "abed");
subsequence("ajblqcpdz", "aefcnbtdi");