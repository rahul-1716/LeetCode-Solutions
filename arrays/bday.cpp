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


class Solution {
public:
    int maxPathScore(vector<vector<int>>& grid, int k) {
        int m = grid.size();
        int n = grid[0].size();
        const int NEG = -1e9;

        vector<vector<int>> prev(n, vector<int>(k + 1, NEG));

        for (int i = 0; i < m; ++i) {
            vector<vector<int>> curr(n, vector<int>(k + 1, NEG));

            for (int j = 0; j < n; ++j) {
                int gain = grid[i][j];
                int need = (gain > 0 ? 1 : 0);

                int limit = min(k, i + j);

                if (i == 0 && j == 0) {
                    curr[0][0] = 0;
                    continue;
                }

                for (int c = need; c <= limit; ++c) {
                    int best = NEG;

                    if (i > 0 && prev[j][c - need] != NEG) {
                        best = max(best, prev[j][c - need] + gain);
                    }

                    if (j > 0 && curr[j - 1][c - need] != NEG) {
                        best = max(best, curr[j - 1][c - need] + gain);
                    }

                    curr[j][c] = best;
                }
            }

            prev.swap(curr);
        }

        int ans = NEG;
        for (int c = 0; c <= k; ++c) {
            ans = max(ans, prev[n - 1][c]);
        }

        return ans < 0 ? -1 : ans;
    }
};
