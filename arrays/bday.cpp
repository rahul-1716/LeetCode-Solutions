#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int minimumDistance(string word) {
        memset(dp, -1, sizeof(dp));

        return solve(0, 26, 26, word);
    }

private:
    int dp[301][27][27];

    int getDistance(int a, int b) {
        if (a == 26 || b == 26) {
            return 0;
        }

        const int row1 = a / 6;
        const int col1 = a % 6;
        const int row2 = b / 6;
        const int col2 = b % 6;

        return abs(row1 - row2) + abs(col1 - col2);
    }

    int solve(int index, int finger1, int finger2, const string& word) {
        if (index == static_cast<int>(word.size())) {
            return 0;
        }

        if (dp[index][finger1][finger2] != -1) {
            return dp[index][finger1][finger2];
        }

        const int current = word[index] - 'A';

        const int useFinger1 = getDistance(finger1, current) + solve(index + 1, current, finger2, word);
        const int useFinger2 = getDistance(finger2, current) + solve(index + 1, finger1, current, word);

        return dp[index][finger1][finger2] = min(useFinger1, useFinger2);
    }
};
