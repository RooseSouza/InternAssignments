def rotate90(matrix):
    n = len(matrix)
    #new matrix using transpose and reverse rows logic
    return [[matrix[n - 1 - j][i] for j in range(n)] for i in range(n)]


def rotate(matrix, k):
    k = k % 4
    result = [row[:] for row in matrix] 
    for _ in range(k):
        result = rotate90(result)
    return result


def print_matrix(mat, title):
    """Helper function to print matrix neatly with a title."""
    print(f"\n{title}:")
    for row in mat:
        print(row)


# example and tests
if __name__ == "__main__":
    mat = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    print_matrix(mat, "Original Matrix")

    rotated90 = rotate(mat, 1)
    print_matrix(rotated90, "Rotated 90 degrees Clockwise")

    rotated180 = rotate(mat, 2)
    print_matrix(rotated180, "Rotated 180 degrees Clockwise")

    rotated270 = rotate(mat, 3)
    print_matrix(rotated270, "Rotated 270 degrees Clockwise")

    assert rotated90 == [[7, 4, 1],
                          [8, 5, 2],
                          [9, 6, 3]]

    assert rotated180 == [[9, 8, 7],
                           [6, 5, 4],
                           [3, 2, 1]]

    assert rotated270 == [[3, 6, 9],
                           [2, 5, 8],
                           [1, 4, 7]]

    print("\n✅ All tests passed successfully!")
