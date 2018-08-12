import aluno_exatas.fis_exp as fe

def execute(n):
  if f == None:
    print('There\'s no function')
  elif n == 0:
    print(f.funcao)
  elif n == 1:
    print(f.variaveis)
  elif n == 2:
    print(f.propagacao)
  elif n == 3:
    print(list(f.incertezas.values()))

f = None
print('Server started')
while True:
    msg = input().split()

    method = msg[0]
    if method == 'set':
      try:
        f = fe.FisExp(msg[1])
        print('Function set: ' + msg[1])
      except Exception:
        print('Invalid function')
    elif method == 'execute':
    	execute(int(msg[1]))
    else:
    	print('unrecognized function')
