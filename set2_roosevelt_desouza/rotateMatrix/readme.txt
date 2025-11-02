Matrix Rotation (90°, 180°, 270°)

Objective:
Write a Python program that rotates an N×N (square) matrix clockwise by 90°.
The rotation can also be performed by multiples of 90° i.e., 0°, 90°, 180°, and 270°.

Approach:
Method Used: (a) Transpose + Reverse Rows

This is a simple and efficient method for matrix rotation:

Transpose the matrix — swap elements across the main diagonal (row ↔ column).

Reverse each row — this shifts columns to the correct rotated position.

This method is clean, intuitive, and can be done either in-place (O(1) space) or by creating a new matrix (O(N²) space).
In this program, we create a new rotated matrix to preserve the original.

Implementation Details

Function:
rotate90(matrix) → Returns a new matrix rotated by 90° clockwise.
rotate(matrix, k) → Rotates by multiples of 90°, where

k = 0 → 0°

k = 1 → 90°

k = 2 → 180°

k = 3 → 270°

Complexity:

Time: O(N²) (each element visited once)

Space: O(N²) (creates new rotated matrix)