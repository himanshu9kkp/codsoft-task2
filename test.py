def sum(args):
    '''functions returns the sum of all values '''
    result=0
    for i in args:
        result +=i
    return result
print(sum.__doc__)
print(sum(4,5,6,5))
print(sum(5,6,20,4,5))