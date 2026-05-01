#include <bits/stdc++.h>
using namespace std;


class Solution {
    public:
        int minOperations(vector<vector<int>>& grid, int x) {
            vector<int> nums;
            for (auto &row : grid) {
                for (int k : row) {
                    nums.push_back(k);
                }
            }
            sort(nums.begin(), nums.end()); 
            int target = nums[nums.size() / 2];
            long long totalOperations = 0;
            for (int k : nums) {
                int temp = abs(k - target);
                if (temp % x != 0) return -1;
                totalOperations += temp / x; 
            }
            return totalOperations;
        }
    };


    class Solution {
public:
    int maxRotateFunction(vector<int>& nums) {
        int n = nums.size();

        long sum = 0;
        long F = 0;

           for(int i = 0; i < n; i++) {
            sum += nums[i];
            F += (long)i * nums[i];
        }

        long result = F;

        for(int k=1; k < n; k++){
            F = F + sum - (long)n * nums[n - k];

            result = max(result, F);
        }
        return (int)result;
    }
};