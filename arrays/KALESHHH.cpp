#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> solveQueries(vector<int>& nums, vector<int>& queries) {
        const int n = nums.size();
        unordered_map<int, vector<int>> positions;

        for (int i = 0; i < n; i++) {
            positions[nums[i]].push_back(i);
        }

        vector<int> answer(n, -1);

        for (auto& entry : positions) {
            vector<int>& pos = entry.second;
            const int m = pos.size();

            if (m == 1) {
                continue;
            }

            for (int i = 0; i < m; i++) {
                const int current = pos[i];
                const int previous = pos[(i - 1 + m) % m];
                const int next = pos[(i + 1) % m];

                int distancePrevious = abs(current - previous);
                distancePrevious = min(distancePrevious, n - distancePrevious);

                int distanceNext = abs(current - next);
                distanceNext = min(distanceNext, n - distanceNext);

                answer[current] = min(distancePrevious, distanceNext);
            }
        }

        vector<int> result;
        result.reserve(queries.size());

        for (int index : queries) {
            result.push_back(answer[index]);
        }

        return result;
    }
};
