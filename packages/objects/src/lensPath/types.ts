import { Lens } from '@typed/lenses'

export type LensPath = {
  <A, K extends keyof A = keyof A>(path: [K]): Lens<A, A[K]>
  // tslint:disable-next-line:typedef
  <A, K extends keyof A = keyof A, L extends keyof A[K] = keyof A[K]>(path: [K, L]): Lens<
    A,
    A[K][L]
  >
  <
    A,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L]
  >(
    path: [K, L, M]
  ): Lens<A, A[K][L][M]>
  <
    A,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L],
    N extends keyof A[K][L][M] = keyof A[K][L][M]
  >(
    path: [K, L, M, N]
  ): Lens<A, A[K][L][M][N]>
  <
    A,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L],
    N extends keyof A[K][L][M] = keyof A[K][L][M],
    O extends keyof A[K][L][M][N] = keyof A[K][L][M][N]
  >(
    path: [K, L, M, N, O]
  ): Lens<A, A[K][L][M][N][O]>
  <
    A,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L],
    N extends keyof A[K][L][M] = keyof A[K][L][M],
    O extends keyof A[K][L][M][N] = keyof A[K][L][M][N],
    P extends keyof A[K][L][M][N][O] = keyof A[K][L][M][N][O]
  >(
    path: [K, L, M, N, O, P]
  ): Lens<A, A[K][L][M][N][O][P]>
  <
    A,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L],
    N extends keyof A[K][L][M] = keyof A[K][L][M],
    O extends keyof A[K][L][M][N] = keyof A[K][L][M][N],
    P extends keyof A[K][L][M][N][O] = keyof A[K][L][M][N][O],
    Q extends keyof A[K][L][M][N][O][P] = keyof A[K][L][M][N][O][P]
  >(
    path: [K, L, M, N, O, P, Q]
  ): Lens<A, A[K][L][M][N][O][P][Q]>
  <
    A,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L],
    N extends keyof A[K][L][M] = keyof A[K][L][M],
    O extends keyof A[K][L][M][N] = keyof A[K][L][M][N],
    P extends keyof A[K][L][M][N][O] = keyof A[K][L][M][N][O],
    Q extends keyof A[K][L][M][N][O][P] = keyof A[K][L][M][N][O][P],
    R extends keyof A[K][L][M][N][O][P][Q] = keyof A[K][L][M][N][O][P][Q]
  >(
    path: [K, L, M, N, O, P, Q, R]
  ): Lens<A, A[K][L][M][N][O][P][Q][R]>
  <
    A,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L],
    N extends keyof A[K][L][M] = keyof A[K][L][M],
    O extends keyof A[K][L][M][N] = keyof A[K][L][M][N],
    P extends keyof A[K][L][M][N][O] = keyof A[K][L][M][N][O],
    Q extends keyof A[K][L][M][N][O][P] = keyof A[K][L][M][N][O][P],
    R extends keyof A[K][L][M][N][O][P][Q] = keyof A[K][L][M][N][O][P][Q],
    S extends keyof A[K][L][M][N][O][P][Q][R] = keyof A[K][L][M][N][O][P][Q][R]
  >(
    path: [K, L, M, N, O, P, Q, R, S]
  ): Lens<A, A[K][L][M][N][O][P][Q][R][S]>
  <
    A,
    K extends keyof A = keyof A,
    L extends keyof A[K] = keyof A[K],
    M extends keyof A[K][L] = keyof A[K][L],
    N extends keyof A[K][L][M] = keyof A[K][L][M],
    O extends keyof A[K][L][M][N] = keyof A[K][L][M][N],
    P extends keyof A[K][L][M][N][O] = keyof A[K][L][M][N][O],
    Q extends keyof A[K][L][M][N][O][P] = keyof A[K][L][M][N][O][P],
    R extends keyof A[K][L][M][N][O][P][Q] = keyof A[K][L][M][N][O][P][Q],
    S extends keyof A[K][L][M][N][O][P][Q][R] = keyof A[K][L][M][N][O][P][Q][R],
    T extends keyof A[K][L][M][N][O][P][Q][R][S] = keyof A[K][L][M][N][O][P][Q][R][S]
  >(
    path: [K, L, M, N, O, P, Q, R, S]
  ): Lens<A, A[K][L][M][N][O][P][Q][R][S][T]>

  <A, B>(path: ArrayLike<string>): Lens<A, B>
}
