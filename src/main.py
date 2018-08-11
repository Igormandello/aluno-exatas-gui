def execute(n):
	print('executing function ' + str(n))

print('Server started')
while True:
    msg = input().split()

    method = msg[0]
    if method == "execute":
    	execute(int(msg[1]))
    else:
    	print('unrecognized function')
