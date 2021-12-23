function subsequence(str1, str2) {
	let subsqnc = "";
    let strLength1 = 0;
    let strLength2 = 0;
    
	while (str1[strLength1] != undefined) {
    	strLength1++;
	}
    while (str2[strLength2] != undefined) {
    	strLength2++;
	}

    for (x = 0; x < strLength1; x++) {
    	for (y = 0; y < strLength2; y++) {
        	if (str1[x] == str2[y]) {
                if (x <= y) {
                    subsqnc += str1[x];
                    // Output: "abd"
                }
                if (x >= y) {
                    // subsqnc += str1[x];
                    // Output: "acd"
                }
            }
        }
    }
    console.log(`Parameter: "${str1}", "${str2}"`);
    console.log(`Output: "${subsqnc}"`);
}
// subsequence("abcd", "abed");
subsequence("ajblqcpdz", "aefcnbtdi");