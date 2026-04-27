#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int maxDistance(vector<int>& nums1, vector<int>& nums2) {
        int i = 0;
        int j = 0;
        int answer = 0;

        while (i < static_cast<int>(nums1.size()) && j < static_cast<int>(nums2.size())) {
            if (i <= j && nums1[i] <= nums2[j]) {
                answer = max(answer, j - i);
                j++;
            } else {
                i++;
                if (i > j) {
                    j = i;
                }
            }
        }

        return answer;
    }
};
