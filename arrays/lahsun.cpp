#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int minimumHammingDistance(vector<int>& source, vector<int>& target, vector<vector<int>>& allowedSwaps) {
        const int n = source.size();
        parent.resize(n);
        iota(parent.begin(), parent.end(), 0);

        for (const vector<int>& allowedSwap : allowedSwaps) {
            unite(allowedSwap[0], allowedSwap[1]);
        }

        unordered_map<int, unordered_map<int, int>> groups;
        for (int i = 0; i < n; i++) {
            groups[find(i)][source[i]]++;
        }

        int hammingDist = 0;
        for (int i = 0; i < n; i++) {
            int root = find(i);
            auto& freq = groups[root];

            if (freq.count(target[i]) && freq[target[i]] > 0) {
                freq[target[i]]--;
            } else {
                hammingDist++;
            }
        }

        return hammingDist;
    }

private:
    vector<int> parent;

    int find(int x) {
        if (parent[x] == x) {
            return x;
        }

        return parent[x] = find(parent[x]);
    }

    void unite(int a, int b) {
        parent[find(a)] = find(b);
    }
};
