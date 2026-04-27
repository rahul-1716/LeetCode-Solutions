#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int minimumDistance(vector<int>& nums) {
        unordered_map<int, vector<int>> positions;

        for (int i = 0; i < static_cast<int>(nums.size()); i++) {
            positions[nums[i]].push_back(i);
        }

        int answer = INT_MAX;

        for (auto& entry : positions) {
            vector<int>& indexes = entry.second;

            if (indexes.size() < 3) {
                continue;
            }

            for (int i = 0; i + 2 < static_cast<int>(indexes.size()); i++) {
                const int distance = 2 * (indexes[i + 2] - indexes[i]);
                answer = min(answer, distance);
            }
        }

        return (answer == INT_MAX) ? -1 : answer;
    }
};
