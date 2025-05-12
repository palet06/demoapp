
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model ApplicationDocuments
 * 
 */
export type ApplicationDocuments = $Result.DefaultSelection<Prisma.$ApplicationDocumentsPayload>
/**
 * Model EmployerInfo
 * 
 */
export type EmployerInfo = $Result.DefaultSelection<Prisma.$EmployerInfoPayload>
/**
 * Model ApplicationHistory
 * 
 */
export type ApplicationHistory = $Result.DefaultSelection<Prisma.$ApplicationHistoryPayload>
/**
 * Model ApplicationWorkflow
 * 
 */
export type ApplicationWorkflow = $Result.DefaultSelection<Prisma.$ApplicationWorkflowPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ApplicationStatus: {
  DEGERLENDIRME_ASAMASINDA: 'DEGERLENDIRME_ASAMASINDA',
  ONAYLANDI: 'ONAYLANDI',
  RED_EDILDI: 'RED_EDILDI',
  DIS_KURUM_GORUSU_BEKLENIYOR: 'DIS_KURUM_GORUSU_BEKLENIYOR',
  GUNCELLEME_BEKLENIYOR: 'GUNCELLEME_BEKLENIYOR',
  IPTAL_EDILDI: 'IPTAL_EDILDI',
  SONLANDIRILDI: 'SONLANDIRILDI',
  GECERLILIGI_SONA_ERDI: 'GECERLILIGI_SONA_ERDI'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const Role: {
  DIS_KULLANICI: 'DIS_KULLANICI',
  UZMAN: 'UZMAN',
  SUBE_MUDURU: 'SUBE_MUDURU',
  DAIRE_BASKANI: 'DAIRE_BASKANI',
  GENEL_MUDUR: 'GENEL_MUDUR'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicationDocuments`: Exposes CRUD operations for the **ApplicationDocuments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationDocuments
    * const applicationDocuments = await prisma.applicationDocuments.findMany()
    * ```
    */
  get applicationDocuments(): Prisma.ApplicationDocumentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employerInfo`: Exposes CRUD operations for the **EmployerInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployerInfos
    * const employerInfos = await prisma.employerInfo.findMany()
    * ```
    */
  get employerInfo(): Prisma.EmployerInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicationHistory`: Exposes CRUD operations for the **ApplicationHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationHistories
    * const applicationHistories = await prisma.applicationHistory.findMany()
    * ```
    */
  get applicationHistory(): Prisma.ApplicationHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicationWorkflow`: Exposes CRUD operations for the **ApplicationWorkflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationWorkflows
    * const applicationWorkflows = await prisma.applicationWorkflow.findMany()
    * ```
    */
  get applicationWorkflow(): Prisma.ApplicationWorkflowDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Application: 'Application',
    ApplicationDocuments: 'ApplicationDocuments',
    EmployerInfo: 'EmployerInfo',
    ApplicationHistory: 'ApplicationHistory',
    ApplicationWorkflow: 'ApplicationWorkflow'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "application" | "applicationDocuments" | "employerInfo" | "applicationHistory" | "applicationWorkflow"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      ApplicationDocuments: {
        payload: Prisma.$ApplicationDocumentsPayload<ExtArgs>
        fields: Prisma.ApplicationDocumentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationDocumentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationDocumentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentsPayload>
          }
          findFirst: {
            args: Prisma.ApplicationDocumentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationDocumentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentsPayload>
          }
          findMany: {
            args: Prisma.ApplicationDocumentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentsPayload>[]
          }
          create: {
            args: Prisma.ApplicationDocumentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentsPayload>
          }
          createMany: {
            args: Prisma.ApplicationDocumentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationDocumentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentsPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDocumentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentsPayload>
          }
          update: {
            args: Prisma.ApplicationDocumentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentsPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDocumentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationDocumentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationDocumentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentsPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationDocumentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentsPayload>
          }
          aggregate: {
            args: Prisma.ApplicationDocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationDocuments>
          }
          groupBy: {
            args: Prisma.ApplicationDocumentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationDocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationDocumentsCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationDocumentsCountAggregateOutputType> | number
          }
        }
      }
      EmployerInfo: {
        payload: Prisma.$EmployerInfoPayload<ExtArgs>
        fields: Prisma.EmployerInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployerInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployerInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerInfoPayload>
          }
          findFirst: {
            args: Prisma.EmployerInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployerInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerInfoPayload>
          }
          findMany: {
            args: Prisma.EmployerInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerInfoPayload>[]
          }
          create: {
            args: Prisma.EmployerInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerInfoPayload>
          }
          createMany: {
            args: Prisma.EmployerInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployerInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerInfoPayload>[]
          }
          delete: {
            args: Prisma.EmployerInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerInfoPayload>
          }
          update: {
            args: Prisma.EmployerInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerInfoPayload>
          }
          deleteMany: {
            args: Prisma.EmployerInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployerInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployerInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerInfoPayload>[]
          }
          upsert: {
            args: Prisma.EmployerInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerInfoPayload>
          }
          aggregate: {
            args: Prisma.EmployerInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployerInfo>
          }
          groupBy: {
            args: Prisma.EmployerInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployerInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployerInfoCountArgs<ExtArgs>
            result: $Utils.Optional<EmployerInfoCountAggregateOutputType> | number
          }
        }
      }
      ApplicationHistory: {
        payload: Prisma.$ApplicationHistoryPayload<ExtArgs>
        fields: Prisma.ApplicationHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationHistoryPayload>
          }
          findFirst: {
            args: Prisma.ApplicationHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationHistoryPayload>
          }
          findMany: {
            args: Prisma.ApplicationHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationHistoryPayload>[]
          }
          create: {
            args: Prisma.ApplicationHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationHistoryPayload>
          }
          createMany: {
            args: Prisma.ApplicationHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationHistoryPayload>[]
          }
          delete: {
            args: Prisma.ApplicationHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationHistoryPayload>
          }
          update: {
            args: Prisma.ApplicationHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationHistoryPayload>
          }
          aggregate: {
            args: Prisma.ApplicationHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationHistory>
          }
          groupBy: {
            args: Prisma.ApplicationHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationHistoryCountAggregateOutputType> | number
          }
        }
      }
      ApplicationWorkflow: {
        payload: Prisma.$ApplicationWorkflowPayload<ExtArgs>
        fields: Prisma.ApplicationWorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationWorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationWorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationWorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationWorkflowPayload>
          }
          findFirst: {
            args: Prisma.ApplicationWorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationWorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationWorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationWorkflowPayload>
          }
          findMany: {
            args: Prisma.ApplicationWorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationWorkflowPayload>[]
          }
          create: {
            args: Prisma.ApplicationWorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationWorkflowPayload>
          }
          createMany: {
            args: Prisma.ApplicationWorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationWorkflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationWorkflowPayload>[]
          }
          delete: {
            args: Prisma.ApplicationWorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationWorkflowPayload>
          }
          update: {
            args: Prisma.ApplicationWorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationWorkflowPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationWorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationWorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationWorkflowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationWorkflowPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationWorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationWorkflowPayload>
          }
          aggregate: {
            args: Prisma.ApplicationWorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationWorkflow>
          }
          groupBy: {
            args: Prisma.ApplicationWorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationWorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationWorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationWorkflowCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    application?: ApplicationOmit
    applicationDocuments?: ApplicationDocumentsOmit
    employerInfo?: EmployerInfoOmit
    applicationHistory?: ApplicationHistoryOmit
    applicationWorkflow?: ApplicationWorkflowOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    applications: number
    applicationHistories: number
    workflows: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
    applicationHistories?: boolean | UserCountOutputTypeCountApplicationHistoriesArgs
    workflows?: boolean | UserCountOutputTypeCountWorkflowsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWorkflowWhereInput
  }


  /**
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    histories: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | ApplicationCountOutputTypeCountHistoriesArgs
  }

  // Custom InputTypes
  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applications?: boolean | User$applicationsArgs<ExtArgs>
    applicationHistories?: boolean | User$applicationHistoriesArgs<ExtArgs>
    workflows?: boolean | User$workflowsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | User$applicationsArgs<ExtArgs>
    applicationHistories?: boolean | User$applicationHistoriesArgs<ExtArgs>
    workflows?: boolean | User$workflowsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      applicationHistories: Prisma.$ApplicationHistoryPayload<ExtArgs>[]
      workflows: Prisma.$ApplicationWorkflowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applicationHistories<T extends User$applicationHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workflows<T extends User$workflowsArgs<ExtArgs> = {}>(args?: Subset<T, User$workflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationWorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * User.applicationHistories
   */
  export type User$applicationHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationHistory
     */
    select?: ApplicationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationHistory
     */
    omit?: ApplicationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationHistoryInclude<ExtArgs> | null
    where?: ApplicationHistoryWhereInput
    orderBy?: ApplicationHistoryOrderByWithRelationInput | ApplicationHistoryOrderByWithRelationInput[]
    cursor?: ApplicationHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationHistoryScalarFieldEnum | ApplicationHistoryScalarFieldEnum[]
  }

  /**
   * User.workflows
   */
  export type User$workflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationWorkflow
     */
    select?: ApplicationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationWorkflow
     */
    omit?: ApplicationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationWorkflowInclude<ExtArgs> | null
    where?: ApplicationWorkflowWhereInput
    orderBy?: ApplicationWorkflowOrderByWithRelationInput | ApplicationWorkflowOrderByWithRelationInput[]
    cursor?: ApplicationWorkflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationWorkflowScalarFieldEnum | ApplicationWorkflowScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    id: number | null
    applicantId: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    id: number | null
    applicantId: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: number | null
    applicationNumber: string | null
    applicantId: number | null
    status: $Enums.ApplicationStatus | null
    applicationDate: Date | null
    applicationType: string | null
    izinStartDate: Date | null
    izinEndDate: Date | null
    ytbScholarshipStatus: string | null
    foreignReferenceNumber: string | null
    foreignIdentityNumber: string | null
    firstName: string | null
    lastName: string | null
    fatherName: string | null
    motherName: string | null
    gender: string | null
    placeOfBirth: string | null
    dateOfBirth: Date | null
    maritalStatus: string | null
    nationality: string | null
    passportType: string | null
    passportNumber: string | null
    passportExpiryDate: Date | null
    passportRemainingPeriod: string | null
    residenceAddress: string | null
    email: string | null
    phoneNumber: string | null
    motherLanguage: string | null
    turkishLevel: string | null
    knownLanguages: string | null
    educationLevel: string | null
    specializationField: string | null
    graduatedSchoolName: string | null
    diplomaProfession: string | null
    jobTitle: string | null
    jobDescription: string | null
    employmentReason: string | null
    employmentType: string | null
    employmentDuration: string | null
    permitType: string | null
    grossSalary: string | null
    isCompanyPartner: boolean | null
    isPremiumAbroad: boolean | null
    isHomeServiceJob: boolean | null
    isTechRequired: boolean | null
    isTubitakEmployee: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: number | null
    applicationNumber: string | null
    applicantId: number | null
    status: $Enums.ApplicationStatus | null
    applicationDate: Date | null
    applicationType: string | null
    izinStartDate: Date | null
    izinEndDate: Date | null
    ytbScholarshipStatus: string | null
    foreignReferenceNumber: string | null
    foreignIdentityNumber: string | null
    firstName: string | null
    lastName: string | null
    fatherName: string | null
    motherName: string | null
    gender: string | null
    placeOfBirth: string | null
    dateOfBirth: Date | null
    maritalStatus: string | null
    nationality: string | null
    passportType: string | null
    passportNumber: string | null
    passportExpiryDate: Date | null
    passportRemainingPeriod: string | null
    residenceAddress: string | null
    email: string | null
    phoneNumber: string | null
    motherLanguage: string | null
    turkishLevel: string | null
    knownLanguages: string | null
    educationLevel: string | null
    specializationField: string | null
    graduatedSchoolName: string | null
    diplomaProfession: string | null
    jobTitle: string | null
    jobDescription: string | null
    employmentReason: string | null
    employmentType: string | null
    employmentDuration: string | null
    permitType: string | null
    grossSalary: string | null
    isCompanyPartner: boolean | null
    isPremiumAbroad: boolean | null
    isHomeServiceJob: boolean | null
    isTechRequired: boolean | null
    isTubitakEmployee: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    applicationNumber: number
    applicantId: number
    status: number
    applicationDate: number
    applicationType: number
    izinStartDate: number
    izinEndDate: number
    ytbScholarshipStatus: number
    foreignReferenceNumber: number
    foreignIdentityNumber: number
    firstName: number
    lastName: number
    fatherName: number
    motherName: number
    gender: number
    placeOfBirth: number
    dateOfBirth: number
    maritalStatus: number
    nationality: number
    passportType: number
    passportNumber: number
    passportExpiryDate: number
    passportRemainingPeriod: number
    residenceAddress: number
    email: number
    phoneNumber: number
    motherLanguage: number
    turkishLevel: number
    knownLanguages: number
    educationLevel: number
    specializationField: number
    graduatedSchoolName: number
    diplomaProfession: number
    jobTitle: number
    jobDescription: number
    employmentReason: number
    employmentType: number
    employmentDuration: number
    permitType: number
    grossSalary: number
    isCompanyPartner: number
    isPremiumAbroad: number
    isHomeServiceJob: number
    isTechRequired: number
    isTubitakEmployee: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    id?: true
    applicantId?: true
  }

  export type ApplicationSumAggregateInputType = {
    id?: true
    applicantId?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    applicationNumber?: true
    applicantId?: true
    status?: true
    applicationDate?: true
    applicationType?: true
    izinStartDate?: true
    izinEndDate?: true
    ytbScholarshipStatus?: true
    foreignReferenceNumber?: true
    foreignIdentityNumber?: true
    firstName?: true
    lastName?: true
    fatherName?: true
    motherName?: true
    gender?: true
    placeOfBirth?: true
    dateOfBirth?: true
    maritalStatus?: true
    nationality?: true
    passportType?: true
    passportNumber?: true
    passportExpiryDate?: true
    passportRemainingPeriod?: true
    residenceAddress?: true
    email?: true
    phoneNumber?: true
    motherLanguage?: true
    turkishLevel?: true
    knownLanguages?: true
    educationLevel?: true
    specializationField?: true
    graduatedSchoolName?: true
    diplomaProfession?: true
    jobTitle?: true
    jobDescription?: true
    employmentReason?: true
    employmentType?: true
    employmentDuration?: true
    permitType?: true
    grossSalary?: true
    isCompanyPartner?: true
    isPremiumAbroad?: true
    isHomeServiceJob?: true
    isTechRequired?: true
    isTubitakEmployee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    applicationNumber?: true
    applicantId?: true
    status?: true
    applicationDate?: true
    applicationType?: true
    izinStartDate?: true
    izinEndDate?: true
    ytbScholarshipStatus?: true
    foreignReferenceNumber?: true
    foreignIdentityNumber?: true
    firstName?: true
    lastName?: true
    fatherName?: true
    motherName?: true
    gender?: true
    placeOfBirth?: true
    dateOfBirth?: true
    maritalStatus?: true
    nationality?: true
    passportType?: true
    passportNumber?: true
    passportExpiryDate?: true
    passportRemainingPeriod?: true
    residenceAddress?: true
    email?: true
    phoneNumber?: true
    motherLanguage?: true
    turkishLevel?: true
    knownLanguages?: true
    educationLevel?: true
    specializationField?: true
    graduatedSchoolName?: true
    diplomaProfession?: true
    jobTitle?: true
    jobDescription?: true
    employmentReason?: true
    employmentType?: true
    employmentDuration?: true
    permitType?: true
    grossSalary?: true
    isCompanyPartner?: true
    isPremiumAbroad?: true
    isHomeServiceJob?: true
    isTechRequired?: true
    isTubitakEmployee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    applicationNumber?: true
    applicantId?: true
    status?: true
    applicationDate?: true
    applicationType?: true
    izinStartDate?: true
    izinEndDate?: true
    ytbScholarshipStatus?: true
    foreignReferenceNumber?: true
    foreignIdentityNumber?: true
    firstName?: true
    lastName?: true
    fatherName?: true
    motherName?: true
    gender?: true
    placeOfBirth?: true
    dateOfBirth?: true
    maritalStatus?: true
    nationality?: true
    passportType?: true
    passportNumber?: true
    passportExpiryDate?: true
    passportRemainingPeriod?: true
    residenceAddress?: true
    email?: true
    phoneNumber?: true
    motherLanguage?: true
    turkishLevel?: true
    knownLanguages?: true
    educationLevel?: true
    specializationField?: true
    graduatedSchoolName?: true
    diplomaProfession?: true
    jobTitle?: true
    jobDescription?: true
    employmentReason?: true
    employmentType?: true
    employmentDuration?: true
    permitType?: true
    grossSalary?: true
    isCompanyPartner?: true
    isPremiumAbroad?: true
    isHomeServiceJob?: true
    isTechRequired?: true
    isTubitakEmployee?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: number
    applicationNumber: string
    applicantId: number
    status: $Enums.ApplicationStatus
    applicationDate: Date
    applicationType: string
    izinStartDate: Date | null
    izinEndDate: Date | null
    ytbScholarshipStatus: string | null
    foreignReferenceNumber: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName: string | null
    motherName: string | null
    gender: string | null
    placeOfBirth: string | null
    dateOfBirth: Date | null
    maritalStatus: string | null
    nationality: string | null
    passportType: string | null
    passportNumber: string | null
    passportExpiryDate: Date | null
    passportRemainingPeriod: string | null
    residenceAddress: string | null
    email: string
    phoneNumber: string
    motherLanguage: string | null
    turkishLevel: string | null
    knownLanguages: string | null
    educationLevel: string | null
    specializationField: string | null
    graduatedSchoolName: string | null
    diplomaProfession: string | null
    jobTitle: string | null
    jobDescription: string | null
    employmentReason: string | null
    employmentType: string | null
    employmentDuration: string | null
    permitType: string | null
    grossSalary: string | null
    isCompanyPartner: boolean
    isPremiumAbroad: boolean | null
    isHomeServiceJob: boolean | null
    isTechRequired: boolean | null
    isTubitakEmployee: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationNumber?: boolean
    applicantId?: boolean
    status?: boolean
    applicationDate?: boolean
    applicationType?: boolean
    izinStartDate?: boolean
    izinEndDate?: boolean
    ytbScholarshipStatus?: boolean
    foreignReferenceNumber?: boolean
    foreignIdentityNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    fatherName?: boolean
    motherName?: boolean
    gender?: boolean
    placeOfBirth?: boolean
    dateOfBirth?: boolean
    maritalStatus?: boolean
    nationality?: boolean
    passportType?: boolean
    passportNumber?: boolean
    passportExpiryDate?: boolean
    passportRemainingPeriod?: boolean
    residenceAddress?: boolean
    email?: boolean
    phoneNumber?: boolean
    motherLanguage?: boolean
    turkishLevel?: boolean
    knownLanguages?: boolean
    educationLevel?: boolean
    specializationField?: boolean
    graduatedSchoolName?: boolean
    diplomaProfession?: boolean
    jobTitle?: boolean
    jobDescription?: boolean
    employmentReason?: boolean
    employmentType?: boolean
    employmentDuration?: boolean
    permitType?: boolean
    grossSalary?: boolean
    isCompanyPartner?: boolean
    isPremiumAbroad?: boolean
    isHomeServiceJob?: boolean
    isTechRequired?: boolean
    isTubitakEmployee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Application$documentsArgs<ExtArgs>
    employerInfo?: boolean | Application$employerInfoArgs<ExtArgs>
    histories?: boolean | Application$historiesArgs<ExtArgs>
    workflow?: boolean | Application$workflowArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationNumber?: boolean
    applicantId?: boolean
    status?: boolean
    applicationDate?: boolean
    applicationType?: boolean
    izinStartDate?: boolean
    izinEndDate?: boolean
    ytbScholarshipStatus?: boolean
    foreignReferenceNumber?: boolean
    foreignIdentityNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    fatherName?: boolean
    motherName?: boolean
    gender?: boolean
    placeOfBirth?: boolean
    dateOfBirth?: boolean
    maritalStatus?: boolean
    nationality?: boolean
    passportType?: boolean
    passportNumber?: boolean
    passportExpiryDate?: boolean
    passportRemainingPeriod?: boolean
    residenceAddress?: boolean
    email?: boolean
    phoneNumber?: boolean
    motherLanguage?: boolean
    turkishLevel?: boolean
    knownLanguages?: boolean
    educationLevel?: boolean
    specializationField?: boolean
    graduatedSchoolName?: boolean
    diplomaProfession?: boolean
    jobTitle?: boolean
    jobDescription?: boolean
    employmentReason?: boolean
    employmentType?: boolean
    employmentDuration?: boolean
    permitType?: boolean
    grossSalary?: boolean
    isCompanyPartner?: boolean
    isPremiumAbroad?: boolean
    isHomeServiceJob?: boolean
    isTechRequired?: boolean
    isTubitakEmployee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationNumber?: boolean
    applicantId?: boolean
    status?: boolean
    applicationDate?: boolean
    applicationType?: boolean
    izinStartDate?: boolean
    izinEndDate?: boolean
    ytbScholarshipStatus?: boolean
    foreignReferenceNumber?: boolean
    foreignIdentityNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    fatherName?: boolean
    motherName?: boolean
    gender?: boolean
    placeOfBirth?: boolean
    dateOfBirth?: boolean
    maritalStatus?: boolean
    nationality?: boolean
    passportType?: boolean
    passportNumber?: boolean
    passportExpiryDate?: boolean
    passportRemainingPeriod?: boolean
    residenceAddress?: boolean
    email?: boolean
    phoneNumber?: boolean
    motherLanguage?: boolean
    turkishLevel?: boolean
    knownLanguages?: boolean
    educationLevel?: boolean
    specializationField?: boolean
    graduatedSchoolName?: boolean
    diplomaProfession?: boolean
    jobTitle?: boolean
    jobDescription?: boolean
    employmentReason?: boolean
    employmentType?: boolean
    employmentDuration?: boolean
    permitType?: boolean
    grossSalary?: boolean
    isCompanyPartner?: boolean
    isPremiumAbroad?: boolean
    isHomeServiceJob?: boolean
    isTechRequired?: boolean
    isTubitakEmployee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    applicationNumber?: boolean
    applicantId?: boolean
    status?: boolean
    applicationDate?: boolean
    applicationType?: boolean
    izinStartDate?: boolean
    izinEndDate?: boolean
    ytbScholarshipStatus?: boolean
    foreignReferenceNumber?: boolean
    foreignIdentityNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    fatherName?: boolean
    motherName?: boolean
    gender?: boolean
    placeOfBirth?: boolean
    dateOfBirth?: boolean
    maritalStatus?: boolean
    nationality?: boolean
    passportType?: boolean
    passportNumber?: boolean
    passportExpiryDate?: boolean
    passportRemainingPeriod?: boolean
    residenceAddress?: boolean
    email?: boolean
    phoneNumber?: boolean
    motherLanguage?: boolean
    turkishLevel?: boolean
    knownLanguages?: boolean
    educationLevel?: boolean
    specializationField?: boolean
    graduatedSchoolName?: boolean
    diplomaProfession?: boolean
    jobTitle?: boolean
    jobDescription?: boolean
    employmentReason?: boolean
    employmentType?: boolean
    employmentDuration?: boolean
    permitType?: boolean
    grossSalary?: boolean
    isCompanyPartner?: boolean
    isPremiumAbroad?: boolean
    isHomeServiceJob?: boolean
    isTechRequired?: boolean
    isTubitakEmployee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationNumber" | "applicantId" | "status" | "applicationDate" | "applicationType" | "izinStartDate" | "izinEndDate" | "ytbScholarshipStatus" | "foreignReferenceNumber" | "foreignIdentityNumber" | "firstName" | "lastName" | "fatherName" | "motherName" | "gender" | "placeOfBirth" | "dateOfBirth" | "maritalStatus" | "nationality" | "passportType" | "passportNumber" | "passportExpiryDate" | "passportRemainingPeriod" | "residenceAddress" | "email" | "phoneNumber" | "motherLanguage" | "turkishLevel" | "knownLanguages" | "educationLevel" | "specializationField" | "graduatedSchoolName" | "diplomaProfession" | "jobTitle" | "jobDescription" | "employmentReason" | "employmentType" | "employmentDuration" | "permitType" | "grossSalary" | "isCompanyPartner" | "isPremiumAbroad" | "isHomeServiceJob" | "isTechRequired" | "isTubitakEmployee" | "createdAt" | "updatedAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Application$documentsArgs<ExtArgs>
    employerInfo?: boolean | Application$employerInfoArgs<ExtArgs>
    histories?: boolean | Application$historiesArgs<ExtArgs>
    workflow?: boolean | Application$workflowArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      applicant: Prisma.$UserPayload<ExtArgs>
      documents: Prisma.$ApplicationDocumentsPayload<ExtArgs> | null
      employerInfo: Prisma.$EmployerInfoPayload<ExtArgs> | null
      histories: Prisma.$ApplicationHistoryPayload<ExtArgs>[]
      workflow: Prisma.$ApplicationWorkflowPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationNumber: string
      applicantId: number
      status: $Enums.ApplicationStatus
      applicationDate: Date
      applicationType: string
      izinStartDate: Date | null
      izinEndDate: Date | null
      ytbScholarshipStatus: string | null
      foreignReferenceNumber: string | null
      foreignIdentityNumber: string
      firstName: string
      lastName: string
      fatherName: string | null
      motherName: string | null
      gender: string | null
      placeOfBirth: string | null
      dateOfBirth: Date | null
      maritalStatus: string | null
      nationality: string | null
      passportType: string | null
      passportNumber: string | null
      passportExpiryDate: Date | null
      passportRemainingPeriod: string | null
      residenceAddress: string | null
      email: string
      phoneNumber: string
      motherLanguage: string | null
      turkishLevel: string | null
      knownLanguages: string | null
      educationLevel: string | null
      specializationField: string | null
      graduatedSchoolName: string | null
      diplomaProfession: string | null
      jobTitle: string | null
      jobDescription: string | null
      employmentReason: string | null
      employmentType: string | null
      employmentDuration: string | null
      permitType: string | null
      grossSalary: string | null
      isCompanyPartner: boolean
      isPremiumAbroad: boolean | null
      isHomeServiceJob: boolean | null
      isTechRequired: boolean | null
      isTubitakEmployee: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Application$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Application$documentsArgs<ExtArgs>>): Prisma__ApplicationDocumentsClient<$Result.GetResult<Prisma.$ApplicationDocumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employerInfo<T extends Application$employerInfoArgs<ExtArgs> = {}>(args?: Subset<T, Application$employerInfoArgs<ExtArgs>>): Prisma__EmployerInfoClient<$Result.GetResult<Prisma.$EmployerInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    histories<T extends Application$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Application$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workflow<T extends Application$workflowArgs<ExtArgs> = {}>(args?: Subset<T, Application$workflowArgs<ExtArgs>>): Prisma__ApplicationWorkflowClient<$Result.GetResult<Prisma.$ApplicationWorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'Int'>
    readonly applicationNumber: FieldRef<"Application", 'String'>
    readonly applicantId: FieldRef<"Application", 'Int'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly applicationDate: FieldRef<"Application", 'DateTime'>
    readonly applicationType: FieldRef<"Application", 'String'>
    readonly izinStartDate: FieldRef<"Application", 'DateTime'>
    readonly izinEndDate: FieldRef<"Application", 'DateTime'>
    readonly ytbScholarshipStatus: FieldRef<"Application", 'String'>
    readonly foreignReferenceNumber: FieldRef<"Application", 'String'>
    readonly foreignIdentityNumber: FieldRef<"Application", 'String'>
    readonly firstName: FieldRef<"Application", 'String'>
    readonly lastName: FieldRef<"Application", 'String'>
    readonly fatherName: FieldRef<"Application", 'String'>
    readonly motherName: FieldRef<"Application", 'String'>
    readonly gender: FieldRef<"Application", 'String'>
    readonly placeOfBirth: FieldRef<"Application", 'String'>
    readonly dateOfBirth: FieldRef<"Application", 'DateTime'>
    readonly maritalStatus: FieldRef<"Application", 'String'>
    readonly nationality: FieldRef<"Application", 'String'>
    readonly passportType: FieldRef<"Application", 'String'>
    readonly passportNumber: FieldRef<"Application", 'String'>
    readonly passportExpiryDate: FieldRef<"Application", 'DateTime'>
    readonly passportRemainingPeriod: FieldRef<"Application", 'String'>
    readonly residenceAddress: FieldRef<"Application", 'String'>
    readonly email: FieldRef<"Application", 'String'>
    readonly phoneNumber: FieldRef<"Application", 'String'>
    readonly motherLanguage: FieldRef<"Application", 'String'>
    readonly turkishLevel: FieldRef<"Application", 'String'>
    readonly knownLanguages: FieldRef<"Application", 'String'>
    readonly educationLevel: FieldRef<"Application", 'String'>
    readonly specializationField: FieldRef<"Application", 'String'>
    readonly graduatedSchoolName: FieldRef<"Application", 'String'>
    readonly diplomaProfession: FieldRef<"Application", 'String'>
    readonly jobTitle: FieldRef<"Application", 'String'>
    readonly jobDescription: FieldRef<"Application", 'String'>
    readonly employmentReason: FieldRef<"Application", 'String'>
    readonly employmentType: FieldRef<"Application", 'String'>
    readonly employmentDuration: FieldRef<"Application", 'String'>
    readonly permitType: FieldRef<"Application", 'String'>
    readonly grossSalary: FieldRef<"Application", 'String'>
    readonly isCompanyPartner: FieldRef<"Application", 'Boolean'>
    readonly isPremiumAbroad: FieldRef<"Application", 'Boolean'>
    readonly isHomeServiceJob: FieldRef<"Application", 'Boolean'>
    readonly isTechRequired: FieldRef<"Application", 'Boolean'>
    readonly isTubitakEmployee: FieldRef<"Application", 'Boolean'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application.documents
   */
  export type Application$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocuments
     */
    select?: ApplicationDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocuments
     */
    omit?: ApplicationDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentsInclude<ExtArgs> | null
    where?: ApplicationDocumentsWhereInput
  }

  /**
   * Application.employerInfo
   */
  export type Application$employerInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerInfo
     */
    select?: EmployerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerInfo
     */
    omit?: EmployerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInfoInclude<ExtArgs> | null
    where?: EmployerInfoWhereInput
  }

  /**
   * Application.histories
   */
  export type Application$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationHistory
     */
    select?: ApplicationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationHistory
     */
    omit?: ApplicationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationHistoryInclude<ExtArgs> | null
    where?: ApplicationHistoryWhereInput
    orderBy?: ApplicationHistoryOrderByWithRelationInput | ApplicationHistoryOrderByWithRelationInput[]
    cursor?: ApplicationHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationHistoryScalarFieldEnum | ApplicationHistoryScalarFieldEnum[]
  }

  /**
   * Application.workflow
   */
  export type Application$workflowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationWorkflow
     */
    select?: ApplicationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationWorkflow
     */
    omit?: ApplicationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationWorkflowInclude<ExtArgs> | null
    where?: ApplicationWorkflowWhereInput
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model ApplicationDocuments
   */

  export type AggregateApplicationDocuments = {
    _count: ApplicationDocumentsCountAggregateOutputType | null
    _avg: ApplicationDocumentsAvgAggregateOutputType | null
    _sum: ApplicationDocumentsSumAggregateOutputType | null
    _min: ApplicationDocumentsMinAggregateOutputType | null
    _max: ApplicationDocumentsMaxAggregateOutputType | null
  }

  export type ApplicationDocumentsAvgAggregateOutputType = {
    id: number | null
    applicationId: number | null
  }

  export type ApplicationDocumentsSumAggregateOutputType = {
    id: number | null
    applicationId: number | null
  }

  export type ApplicationDocumentsMinAggregateOutputType = {
    id: number | null
    applicationId: number | null
    applicationPetition: string | null
    passport: string | null
    employmentContract: string | null
    diploma: string | null
    additionalDocument: string | null
    employmentNotification: string | null
    permitTerminationPetition: string | null
    activityCertificate: string | null
    tradeRegistryGazette: string | null
    balanceSheet: string | null
    tourismLicense: string | null
  }

  export type ApplicationDocumentsMaxAggregateOutputType = {
    id: number | null
    applicationId: number | null
    applicationPetition: string | null
    passport: string | null
    employmentContract: string | null
    diploma: string | null
    additionalDocument: string | null
    employmentNotification: string | null
    permitTerminationPetition: string | null
    activityCertificate: string | null
    tradeRegistryGazette: string | null
    balanceSheet: string | null
    tourismLicense: string | null
  }

  export type ApplicationDocumentsCountAggregateOutputType = {
    id: number
    applicationId: number
    applicationPetition: number
    passport: number
    employmentContract: number
    diploma: number
    additionalDocument: number
    employmentNotification: number
    permitTerminationPetition: number
    activityCertificate: number
    tradeRegistryGazette: number
    balanceSheet: number
    tourismLicense: number
    _all: number
  }


  export type ApplicationDocumentsAvgAggregateInputType = {
    id?: true
    applicationId?: true
  }

  export type ApplicationDocumentsSumAggregateInputType = {
    id?: true
    applicationId?: true
  }

  export type ApplicationDocumentsMinAggregateInputType = {
    id?: true
    applicationId?: true
    applicationPetition?: true
    passport?: true
    employmentContract?: true
    diploma?: true
    additionalDocument?: true
    employmentNotification?: true
    permitTerminationPetition?: true
    activityCertificate?: true
    tradeRegistryGazette?: true
    balanceSheet?: true
    tourismLicense?: true
  }

  export type ApplicationDocumentsMaxAggregateInputType = {
    id?: true
    applicationId?: true
    applicationPetition?: true
    passport?: true
    employmentContract?: true
    diploma?: true
    additionalDocument?: true
    employmentNotification?: true
    permitTerminationPetition?: true
    activityCertificate?: true
    tradeRegistryGazette?: true
    balanceSheet?: true
    tourismLicense?: true
  }

  export type ApplicationDocumentsCountAggregateInputType = {
    id?: true
    applicationId?: true
    applicationPetition?: true
    passport?: true
    employmentContract?: true
    diploma?: true
    additionalDocument?: true
    employmentNotification?: true
    permitTerminationPetition?: true
    activityCertificate?: true
    tradeRegistryGazette?: true
    balanceSheet?: true
    tourismLicense?: true
    _all?: true
  }

  export type ApplicationDocumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationDocuments to aggregate.
     */
    where?: ApplicationDocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentsOrderByWithRelationInput | ApplicationDocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationDocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationDocuments
    **/
    _count?: true | ApplicationDocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationDocumentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationDocumentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationDocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationDocumentsMaxAggregateInputType
  }

  export type GetApplicationDocumentsAggregateType<T extends ApplicationDocumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationDocuments[P]>
      : GetScalarType<T[P], AggregateApplicationDocuments[P]>
  }




  export type ApplicationDocumentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationDocumentsWhereInput
    orderBy?: ApplicationDocumentsOrderByWithAggregationInput | ApplicationDocumentsOrderByWithAggregationInput[]
    by: ApplicationDocumentsScalarFieldEnum[] | ApplicationDocumentsScalarFieldEnum
    having?: ApplicationDocumentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationDocumentsCountAggregateInputType | true
    _avg?: ApplicationDocumentsAvgAggregateInputType
    _sum?: ApplicationDocumentsSumAggregateInputType
    _min?: ApplicationDocumentsMinAggregateInputType
    _max?: ApplicationDocumentsMaxAggregateInputType
  }

  export type ApplicationDocumentsGroupByOutputType = {
    id: number
    applicationId: number
    applicationPetition: string | null
    passport: string | null
    employmentContract: string | null
    diploma: string | null
    additionalDocument: string | null
    employmentNotification: string | null
    permitTerminationPetition: string | null
    activityCertificate: string | null
    tradeRegistryGazette: string | null
    balanceSheet: string | null
    tourismLicense: string | null
    _count: ApplicationDocumentsCountAggregateOutputType | null
    _avg: ApplicationDocumentsAvgAggregateOutputType | null
    _sum: ApplicationDocumentsSumAggregateOutputType | null
    _min: ApplicationDocumentsMinAggregateOutputType | null
    _max: ApplicationDocumentsMaxAggregateOutputType | null
  }

  type GetApplicationDocumentsGroupByPayload<T extends ApplicationDocumentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationDocumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationDocumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationDocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationDocumentsGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationDocumentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    applicationPetition?: boolean
    passport?: boolean
    employmentContract?: boolean
    diploma?: boolean
    additionalDocument?: boolean
    employmentNotification?: boolean
    permitTerminationPetition?: boolean
    activityCertificate?: boolean
    tradeRegistryGazette?: boolean
    balanceSheet?: boolean
    tourismLicense?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationDocuments"]>

  export type ApplicationDocumentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    applicationPetition?: boolean
    passport?: boolean
    employmentContract?: boolean
    diploma?: boolean
    additionalDocument?: boolean
    employmentNotification?: boolean
    permitTerminationPetition?: boolean
    activityCertificate?: boolean
    tradeRegistryGazette?: boolean
    balanceSheet?: boolean
    tourismLicense?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationDocuments"]>

  export type ApplicationDocumentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    applicationPetition?: boolean
    passport?: boolean
    employmentContract?: boolean
    diploma?: boolean
    additionalDocument?: boolean
    employmentNotification?: boolean
    permitTerminationPetition?: boolean
    activityCertificate?: boolean
    tradeRegistryGazette?: boolean
    balanceSheet?: boolean
    tourismLicense?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationDocuments"]>

  export type ApplicationDocumentsSelectScalar = {
    id?: boolean
    applicationId?: boolean
    applicationPetition?: boolean
    passport?: boolean
    employmentContract?: boolean
    diploma?: boolean
    additionalDocument?: boolean
    employmentNotification?: boolean
    permitTerminationPetition?: boolean
    activityCertificate?: boolean
    tradeRegistryGazette?: boolean
    balanceSheet?: boolean
    tourismLicense?: boolean
  }

  export type ApplicationDocumentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "applicationPetition" | "passport" | "employmentContract" | "diploma" | "additionalDocument" | "employmentNotification" | "permitTerminationPetition" | "activityCertificate" | "tradeRegistryGazette" | "balanceSheet" | "tourismLicense", ExtArgs["result"]["applicationDocuments"]>
  export type ApplicationDocumentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type ApplicationDocumentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type ApplicationDocumentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $ApplicationDocumentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationDocuments"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: number
      applicationPetition: string | null
      passport: string | null
      employmentContract: string | null
      diploma: string | null
      additionalDocument: string | null
      employmentNotification: string | null
      permitTerminationPetition: string | null
      activityCertificate: string | null
      tradeRegistryGazette: string | null
      balanceSheet: string | null
      tourismLicense: string | null
    }, ExtArgs["result"]["applicationDocuments"]>
    composites: {}
  }

  type ApplicationDocumentsGetPayload<S extends boolean | null | undefined | ApplicationDocumentsDefaultArgs> = $Result.GetResult<Prisma.$ApplicationDocumentsPayload, S>

  type ApplicationDocumentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationDocumentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationDocumentsCountAggregateInputType | true
    }

  export interface ApplicationDocumentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationDocuments'], meta: { name: 'ApplicationDocuments' } }
    /**
     * Find zero or one ApplicationDocuments that matches the filter.
     * @param {ApplicationDocumentsFindUniqueArgs} args - Arguments to find a ApplicationDocuments
     * @example
     * // Get one ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocuments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationDocumentsFindUniqueArgs>(args: SelectSubset<T, ApplicationDocumentsFindUniqueArgs<ExtArgs>>): Prisma__ApplicationDocumentsClient<$Result.GetResult<Prisma.$ApplicationDocumentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplicationDocuments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationDocumentsFindUniqueOrThrowArgs} args - Arguments to find a ApplicationDocuments
     * @example
     * // Get one ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocuments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationDocumentsFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationDocumentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationDocumentsClient<$Result.GetResult<Prisma.$ApplicationDocumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentsFindFirstArgs} args - Arguments to find a ApplicationDocuments
     * @example
     * // Get one ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocuments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationDocumentsFindFirstArgs>(args?: SelectSubset<T, ApplicationDocumentsFindFirstArgs<ExtArgs>>): Prisma__ApplicationDocumentsClient<$Result.GetResult<Prisma.$ApplicationDocumentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationDocuments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentsFindFirstOrThrowArgs} args - Arguments to find a ApplicationDocuments
     * @example
     * // Get one ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocuments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationDocumentsFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationDocumentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationDocumentsClient<$Result.GetResult<Prisma.$ApplicationDocumentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplicationDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocuments.findMany()
     * 
     * // Get first 10 ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocuments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationDocumentsWithIdOnly = await prisma.applicationDocuments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationDocumentsFindManyArgs>(args?: SelectSubset<T, ApplicationDocumentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplicationDocuments.
     * @param {ApplicationDocumentsCreateArgs} args - Arguments to create a ApplicationDocuments.
     * @example
     * // Create one ApplicationDocuments
     * const ApplicationDocuments = await prisma.applicationDocuments.create({
     *   data: {
     *     // ... data to create a ApplicationDocuments
     *   }
     * })
     * 
     */
    create<T extends ApplicationDocumentsCreateArgs>(args: SelectSubset<T, ApplicationDocumentsCreateArgs<ExtArgs>>): Prisma__ApplicationDocumentsClient<$Result.GetResult<Prisma.$ApplicationDocumentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplicationDocuments.
     * @param {ApplicationDocumentsCreateManyArgs} args - Arguments to create many ApplicationDocuments.
     * @example
     * // Create many ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocuments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationDocumentsCreateManyArgs>(args?: SelectSubset<T, ApplicationDocumentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicationDocuments and returns the data saved in the database.
     * @param {ApplicationDocumentsCreateManyAndReturnArgs} args - Arguments to create many ApplicationDocuments.
     * @example
     * // Create many ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocuments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicationDocuments and only return the `id`
     * const applicationDocumentsWithIdOnly = await prisma.applicationDocuments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationDocumentsCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationDocumentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDocumentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplicationDocuments.
     * @param {ApplicationDocumentsDeleteArgs} args - Arguments to delete one ApplicationDocuments.
     * @example
     * // Delete one ApplicationDocuments
     * const ApplicationDocuments = await prisma.applicationDocuments.delete({
     *   where: {
     *     // ... filter to delete one ApplicationDocuments
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDocumentsDeleteArgs>(args: SelectSubset<T, ApplicationDocumentsDeleteArgs<ExtArgs>>): Prisma__ApplicationDocumentsClient<$Result.GetResult<Prisma.$ApplicationDocumentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplicationDocuments.
     * @param {ApplicationDocumentsUpdateArgs} args - Arguments to update one ApplicationDocuments.
     * @example
     * // Update one ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocuments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationDocumentsUpdateArgs>(args: SelectSubset<T, ApplicationDocumentsUpdateArgs<ExtArgs>>): Prisma__ApplicationDocumentsClient<$Result.GetResult<Prisma.$ApplicationDocumentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplicationDocuments.
     * @param {ApplicationDocumentsDeleteManyArgs} args - Arguments to filter ApplicationDocuments to delete.
     * @example
     * // Delete a few ApplicationDocuments
     * const { count } = await prisma.applicationDocuments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDocumentsDeleteManyArgs>(args?: SelectSubset<T, ApplicationDocumentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocuments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationDocumentsUpdateManyArgs>(args: SelectSubset<T, ApplicationDocumentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationDocuments and returns the data updated in the database.
     * @param {ApplicationDocumentsUpdateManyAndReturnArgs} args - Arguments to update many ApplicationDocuments.
     * @example
     * // Update many ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocuments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplicationDocuments and only return the `id`
     * const applicationDocumentsWithIdOnly = await prisma.applicationDocuments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationDocumentsUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationDocumentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDocumentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplicationDocuments.
     * @param {ApplicationDocumentsUpsertArgs} args - Arguments to update or create a ApplicationDocuments.
     * @example
     * // Update or create a ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocuments.upsert({
     *   create: {
     *     // ... data to create a ApplicationDocuments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationDocuments we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationDocumentsUpsertArgs>(args: SelectSubset<T, ApplicationDocumentsUpsertArgs<ExtArgs>>): Prisma__ApplicationDocumentsClient<$Result.GetResult<Prisma.$ApplicationDocumentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplicationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentsCountArgs} args - Arguments to filter ApplicationDocuments to count.
     * @example
     * // Count the number of ApplicationDocuments
     * const count = await prisma.applicationDocuments.count({
     *   where: {
     *     // ... the filter for the ApplicationDocuments we want to count
     *   }
     * })
    **/
    count<T extends ApplicationDocumentsCountArgs>(
      args?: Subset<T, ApplicationDocumentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationDocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationDocumentsAggregateArgs>(args: Subset<T, ApplicationDocumentsAggregateArgs>): Prisma.PrismaPromise<GetApplicationDocumentsAggregateType<T>>

    /**
     * Group by ApplicationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationDocumentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationDocumentsGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationDocumentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationDocumentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationDocuments model
   */
  readonly fields: ApplicationDocumentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationDocuments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationDocumentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApplicationDocuments model
   */
  interface ApplicationDocumentsFieldRefs {
    readonly id: FieldRef<"ApplicationDocuments", 'Int'>
    readonly applicationId: FieldRef<"ApplicationDocuments", 'Int'>
    readonly applicationPetition: FieldRef<"ApplicationDocuments", 'String'>
    readonly passport: FieldRef<"ApplicationDocuments", 'String'>
    readonly employmentContract: FieldRef<"ApplicationDocuments", 'String'>
    readonly diploma: FieldRef<"ApplicationDocuments", 'String'>
    readonly additionalDocument: FieldRef<"ApplicationDocuments", 'String'>
    readonly employmentNotification: FieldRef<"ApplicationDocuments", 'String'>
    readonly permitTerminationPetition: FieldRef<"ApplicationDocuments", 'String'>
    readonly activityCertificate: FieldRef<"ApplicationDocuments", 'String'>
    readonly tradeRegistryGazette: FieldRef<"ApplicationDocuments", 'String'>
    readonly balanceSheet: FieldRef<"ApplicationDocuments", 'String'>
    readonly tourismLicense: FieldRef<"ApplicationDocuments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationDocuments findUnique
   */
  export type ApplicationDocumentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocuments
     */
    select?: ApplicationDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocuments
     */
    omit?: ApplicationDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocuments to fetch.
     */
    where: ApplicationDocumentsWhereUniqueInput
  }

  /**
   * ApplicationDocuments findUniqueOrThrow
   */
  export type ApplicationDocumentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocuments
     */
    select?: ApplicationDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocuments
     */
    omit?: ApplicationDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocuments to fetch.
     */
    where: ApplicationDocumentsWhereUniqueInput
  }

  /**
   * ApplicationDocuments findFirst
   */
  export type ApplicationDocumentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocuments
     */
    select?: ApplicationDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocuments
     */
    omit?: ApplicationDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocuments to fetch.
     */
    where?: ApplicationDocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentsOrderByWithRelationInput | ApplicationDocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationDocuments.
     */
    cursor?: ApplicationDocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationDocuments.
     */
    distinct?: ApplicationDocumentsScalarFieldEnum | ApplicationDocumentsScalarFieldEnum[]
  }

  /**
   * ApplicationDocuments findFirstOrThrow
   */
  export type ApplicationDocumentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocuments
     */
    select?: ApplicationDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocuments
     */
    omit?: ApplicationDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocuments to fetch.
     */
    where?: ApplicationDocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentsOrderByWithRelationInput | ApplicationDocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationDocuments.
     */
    cursor?: ApplicationDocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationDocuments.
     */
    distinct?: ApplicationDocumentsScalarFieldEnum | ApplicationDocumentsScalarFieldEnum[]
  }

  /**
   * ApplicationDocuments findMany
   */
  export type ApplicationDocumentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocuments
     */
    select?: ApplicationDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocuments
     */
    omit?: ApplicationDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocuments to fetch.
     */
    where?: ApplicationDocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentsOrderByWithRelationInput | ApplicationDocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationDocuments.
     */
    cursor?: ApplicationDocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    distinct?: ApplicationDocumentsScalarFieldEnum | ApplicationDocumentsScalarFieldEnum[]
  }

  /**
   * ApplicationDocuments create
   */
  export type ApplicationDocumentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocuments
     */
    select?: ApplicationDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocuments
     */
    omit?: ApplicationDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentsInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicationDocuments.
     */
    data: XOR<ApplicationDocumentsCreateInput, ApplicationDocumentsUncheckedCreateInput>
  }

  /**
   * ApplicationDocuments createMany
   */
  export type ApplicationDocumentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationDocuments.
     */
    data: ApplicationDocumentsCreateManyInput | ApplicationDocumentsCreateManyInput[]
  }

  /**
   * ApplicationDocuments createManyAndReturn
   */
  export type ApplicationDocumentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocuments
     */
    select?: ApplicationDocumentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocuments
     */
    omit?: ApplicationDocumentsOmit<ExtArgs> | null
    /**
     * The data used to create many ApplicationDocuments.
     */
    data: ApplicationDocumentsCreateManyInput | ApplicationDocumentsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationDocuments update
   */
  export type ApplicationDocumentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocuments
     */
    select?: ApplicationDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocuments
     */
    omit?: ApplicationDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentsInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicationDocuments.
     */
    data: XOR<ApplicationDocumentsUpdateInput, ApplicationDocumentsUncheckedUpdateInput>
    /**
     * Choose, which ApplicationDocuments to update.
     */
    where: ApplicationDocumentsWhereUniqueInput
  }

  /**
   * ApplicationDocuments updateMany
   */
  export type ApplicationDocumentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationDocuments.
     */
    data: XOR<ApplicationDocumentsUpdateManyMutationInput, ApplicationDocumentsUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationDocuments to update
     */
    where?: ApplicationDocumentsWhereInput
    /**
     * Limit how many ApplicationDocuments to update.
     */
    limit?: number
  }

  /**
   * ApplicationDocuments updateManyAndReturn
   */
  export type ApplicationDocumentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocuments
     */
    select?: ApplicationDocumentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocuments
     */
    omit?: ApplicationDocumentsOmit<ExtArgs> | null
    /**
     * The data used to update ApplicationDocuments.
     */
    data: XOR<ApplicationDocumentsUpdateManyMutationInput, ApplicationDocumentsUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationDocuments to update
     */
    where?: ApplicationDocumentsWhereInput
    /**
     * Limit how many ApplicationDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationDocuments upsert
   */
  export type ApplicationDocumentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocuments
     */
    select?: ApplicationDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocuments
     */
    omit?: ApplicationDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentsInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicationDocuments to update in case it exists.
     */
    where: ApplicationDocumentsWhereUniqueInput
    /**
     * In case the ApplicationDocuments found by the `where` argument doesn't exist, create a new ApplicationDocuments with this data.
     */
    create: XOR<ApplicationDocumentsCreateInput, ApplicationDocumentsUncheckedCreateInput>
    /**
     * In case the ApplicationDocuments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationDocumentsUpdateInput, ApplicationDocumentsUncheckedUpdateInput>
  }

  /**
   * ApplicationDocuments delete
   */
  export type ApplicationDocumentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocuments
     */
    select?: ApplicationDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocuments
     */
    omit?: ApplicationDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentsInclude<ExtArgs> | null
    /**
     * Filter which ApplicationDocuments to delete.
     */
    where: ApplicationDocumentsWhereUniqueInput
  }

  /**
   * ApplicationDocuments deleteMany
   */
  export type ApplicationDocumentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationDocuments to delete
     */
    where?: ApplicationDocumentsWhereInput
    /**
     * Limit how many ApplicationDocuments to delete.
     */
    limit?: number
  }

  /**
   * ApplicationDocuments without action
   */
  export type ApplicationDocumentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocuments
     */
    select?: ApplicationDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocuments
     */
    omit?: ApplicationDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentsInclude<ExtArgs> | null
  }


  /**
   * Model EmployerInfo
   */

  export type AggregateEmployerInfo = {
    _count: EmployerInfoCountAggregateOutputType | null
    _avg: EmployerInfoAvgAggregateOutputType | null
    _sum: EmployerInfoSumAggregateOutputType | null
    _min: EmployerInfoMinAggregateOutputType | null
    _max: EmployerInfoMaxAggregateOutputType | null
  }

  export type EmployerInfoAvgAggregateOutputType = {
    id: number | null
    applicationId: number | null
  }

  export type EmployerInfoSumAggregateOutputType = {
    id: number | null
    applicationId: number | null
  }

  export type EmployerInfoMinAggregateOutputType = {
    id: number | null
    applicationId: number | null
    registrationNumber: string | null
    companyType: string | null
    naceCode: string | null
    workplaceTitle: string | null
    phoneNumber: string | null
    ebildirgeName: string | null
    responsibleName: string | null
    currentEmail: string | null
    applicationEmail: string | null
    establishmentDate: Date | null
    mersisNumber: string | null
    taxOffice: string | null
    taxNumber: string | null
    workplaceAddress: string | null
    workAddress: string | null
    capitalStructure: string | null
    registeredCapitalTRY: string | null
    paidCapitalTRY: string | null
  }

  export type EmployerInfoMaxAggregateOutputType = {
    id: number | null
    applicationId: number | null
    registrationNumber: string | null
    companyType: string | null
    naceCode: string | null
    workplaceTitle: string | null
    phoneNumber: string | null
    ebildirgeName: string | null
    responsibleName: string | null
    currentEmail: string | null
    applicationEmail: string | null
    establishmentDate: Date | null
    mersisNumber: string | null
    taxOffice: string | null
    taxNumber: string | null
    workplaceAddress: string | null
    workAddress: string | null
    capitalStructure: string | null
    registeredCapitalTRY: string | null
    paidCapitalTRY: string | null
  }

  export type EmployerInfoCountAggregateOutputType = {
    id: number
    applicationId: number
    registrationNumber: number
    companyType: number
    naceCode: number
    workplaceTitle: number
    phoneNumber: number
    ebildirgeName: number
    responsibleName: number
    currentEmail: number
    applicationEmail: number
    establishmentDate: number
    mersisNumber: number
    taxOffice: number
    taxNumber: number
    workplaceAddress: number
    workAddress: number
    capitalStructure: number
    registeredCapitalTRY: number
    paidCapitalTRY: number
    _all: number
  }


  export type EmployerInfoAvgAggregateInputType = {
    id?: true
    applicationId?: true
  }

  export type EmployerInfoSumAggregateInputType = {
    id?: true
    applicationId?: true
  }

  export type EmployerInfoMinAggregateInputType = {
    id?: true
    applicationId?: true
    registrationNumber?: true
    companyType?: true
    naceCode?: true
    workplaceTitle?: true
    phoneNumber?: true
    ebildirgeName?: true
    responsibleName?: true
    currentEmail?: true
    applicationEmail?: true
    establishmentDate?: true
    mersisNumber?: true
    taxOffice?: true
    taxNumber?: true
    workplaceAddress?: true
    workAddress?: true
    capitalStructure?: true
    registeredCapitalTRY?: true
    paidCapitalTRY?: true
  }

  export type EmployerInfoMaxAggregateInputType = {
    id?: true
    applicationId?: true
    registrationNumber?: true
    companyType?: true
    naceCode?: true
    workplaceTitle?: true
    phoneNumber?: true
    ebildirgeName?: true
    responsibleName?: true
    currentEmail?: true
    applicationEmail?: true
    establishmentDate?: true
    mersisNumber?: true
    taxOffice?: true
    taxNumber?: true
    workplaceAddress?: true
    workAddress?: true
    capitalStructure?: true
    registeredCapitalTRY?: true
    paidCapitalTRY?: true
  }

  export type EmployerInfoCountAggregateInputType = {
    id?: true
    applicationId?: true
    registrationNumber?: true
    companyType?: true
    naceCode?: true
    workplaceTitle?: true
    phoneNumber?: true
    ebildirgeName?: true
    responsibleName?: true
    currentEmail?: true
    applicationEmail?: true
    establishmentDate?: true
    mersisNumber?: true
    taxOffice?: true
    taxNumber?: true
    workplaceAddress?: true
    workAddress?: true
    capitalStructure?: true
    registeredCapitalTRY?: true
    paidCapitalTRY?: true
    _all?: true
  }

  export type EmployerInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployerInfo to aggregate.
     */
    where?: EmployerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployerInfos to fetch.
     */
    orderBy?: EmployerInfoOrderByWithRelationInput | EmployerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployerInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployerInfos
    **/
    _count?: true | EmployerInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployerInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployerInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployerInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployerInfoMaxAggregateInputType
  }

  export type GetEmployerInfoAggregateType<T extends EmployerInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployerInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployerInfo[P]>
      : GetScalarType<T[P], AggregateEmployerInfo[P]>
  }




  export type EmployerInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployerInfoWhereInput
    orderBy?: EmployerInfoOrderByWithAggregationInput | EmployerInfoOrderByWithAggregationInput[]
    by: EmployerInfoScalarFieldEnum[] | EmployerInfoScalarFieldEnum
    having?: EmployerInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployerInfoCountAggregateInputType | true
    _avg?: EmployerInfoAvgAggregateInputType
    _sum?: EmployerInfoSumAggregateInputType
    _min?: EmployerInfoMinAggregateInputType
    _max?: EmployerInfoMaxAggregateInputType
  }

  export type EmployerInfoGroupByOutputType = {
    id: number
    applicationId: number
    registrationNumber: string | null
    companyType: string | null
    naceCode: string | null
    workplaceTitle: string | null
    phoneNumber: string | null
    ebildirgeName: string | null
    responsibleName: string | null
    currentEmail: string | null
    applicationEmail: string | null
    establishmentDate: Date | null
    mersisNumber: string | null
    taxOffice: string | null
    taxNumber: string | null
    workplaceAddress: string | null
    workAddress: string | null
    capitalStructure: string | null
    registeredCapitalTRY: string | null
    paidCapitalTRY: string | null
    _count: EmployerInfoCountAggregateOutputType | null
    _avg: EmployerInfoAvgAggregateOutputType | null
    _sum: EmployerInfoSumAggregateOutputType | null
    _min: EmployerInfoMinAggregateOutputType | null
    _max: EmployerInfoMaxAggregateOutputType | null
  }

  type GetEmployerInfoGroupByPayload<T extends EmployerInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployerInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployerInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployerInfoGroupByOutputType[P]>
            : GetScalarType<T[P], EmployerInfoGroupByOutputType[P]>
        }
      >
    >


  export type EmployerInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    registrationNumber?: boolean
    companyType?: boolean
    naceCode?: boolean
    workplaceTitle?: boolean
    phoneNumber?: boolean
    ebildirgeName?: boolean
    responsibleName?: boolean
    currentEmail?: boolean
    applicationEmail?: boolean
    establishmentDate?: boolean
    mersisNumber?: boolean
    taxOffice?: boolean
    taxNumber?: boolean
    workplaceAddress?: boolean
    workAddress?: boolean
    capitalStructure?: boolean
    registeredCapitalTRY?: boolean
    paidCapitalTRY?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employerInfo"]>

  export type EmployerInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    registrationNumber?: boolean
    companyType?: boolean
    naceCode?: boolean
    workplaceTitle?: boolean
    phoneNumber?: boolean
    ebildirgeName?: boolean
    responsibleName?: boolean
    currentEmail?: boolean
    applicationEmail?: boolean
    establishmentDate?: boolean
    mersisNumber?: boolean
    taxOffice?: boolean
    taxNumber?: boolean
    workplaceAddress?: boolean
    workAddress?: boolean
    capitalStructure?: boolean
    registeredCapitalTRY?: boolean
    paidCapitalTRY?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employerInfo"]>

  export type EmployerInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    registrationNumber?: boolean
    companyType?: boolean
    naceCode?: boolean
    workplaceTitle?: boolean
    phoneNumber?: boolean
    ebildirgeName?: boolean
    responsibleName?: boolean
    currentEmail?: boolean
    applicationEmail?: boolean
    establishmentDate?: boolean
    mersisNumber?: boolean
    taxOffice?: boolean
    taxNumber?: boolean
    workplaceAddress?: boolean
    workAddress?: boolean
    capitalStructure?: boolean
    registeredCapitalTRY?: boolean
    paidCapitalTRY?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employerInfo"]>

  export type EmployerInfoSelectScalar = {
    id?: boolean
    applicationId?: boolean
    registrationNumber?: boolean
    companyType?: boolean
    naceCode?: boolean
    workplaceTitle?: boolean
    phoneNumber?: boolean
    ebildirgeName?: boolean
    responsibleName?: boolean
    currentEmail?: boolean
    applicationEmail?: boolean
    establishmentDate?: boolean
    mersisNumber?: boolean
    taxOffice?: boolean
    taxNumber?: boolean
    workplaceAddress?: boolean
    workAddress?: boolean
    capitalStructure?: boolean
    registeredCapitalTRY?: boolean
    paidCapitalTRY?: boolean
  }

  export type EmployerInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "registrationNumber" | "companyType" | "naceCode" | "workplaceTitle" | "phoneNumber" | "ebildirgeName" | "responsibleName" | "currentEmail" | "applicationEmail" | "establishmentDate" | "mersisNumber" | "taxOffice" | "taxNumber" | "workplaceAddress" | "workAddress" | "capitalStructure" | "registeredCapitalTRY" | "paidCapitalTRY", ExtArgs["result"]["employerInfo"]>
  export type EmployerInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type EmployerInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type EmployerInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $EmployerInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployerInfo"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: number
      registrationNumber: string | null
      companyType: string | null
      naceCode: string | null
      workplaceTitle: string | null
      phoneNumber: string | null
      ebildirgeName: string | null
      responsibleName: string | null
      currentEmail: string | null
      applicationEmail: string | null
      establishmentDate: Date | null
      mersisNumber: string | null
      taxOffice: string | null
      taxNumber: string | null
      workplaceAddress: string | null
      workAddress: string | null
      capitalStructure: string | null
      registeredCapitalTRY: string | null
      paidCapitalTRY: string | null
    }, ExtArgs["result"]["employerInfo"]>
    composites: {}
  }

  type EmployerInfoGetPayload<S extends boolean | null | undefined | EmployerInfoDefaultArgs> = $Result.GetResult<Prisma.$EmployerInfoPayload, S>

  type EmployerInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployerInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployerInfoCountAggregateInputType | true
    }

  export interface EmployerInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployerInfo'], meta: { name: 'EmployerInfo' } }
    /**
     * Find zero or one EmployerInfo that matches the filter.
     * @param {EmployerInfoFindUniqueArgs} args - Arguments to find a EmployerInfo
     * @example
     * // Get one EmployerInfo
     * const employerInfo = await prisma.employerInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployerInfoFindUniqueArgs>(args: SelectSubset<T, EmployerInfoFindUniqueArgs<ExtArgs>>): Prisma__EmployerInfoClient<$Result.GetResult<Prisma.$EmployerInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployerInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployerInfoFindUniqueOrThrowArgs} args - Arguments to find a EmployerInfo
     * @example
     * // Get one EmployerInfo
     * const employerInfo = await prisma.employerInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployerInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployerInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployerInfoClient<$Result.GetResult<Prisma.$EmployerInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployerInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerInfoFindFirstArgs} args - Arguments to find a EmployerInfo
     * @example
     * // Get one EmployerInfo
     * const employerInfo = await prisma.employerInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployerInfoFindFirstArgs>(args?: SelectSubset<T, EmployerInfoFindFirstArgs<ExtArgs>>): Prisma__EmployerInfoClient<$Result.GetResult<Prisma.$EmployerInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployerInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerInfoFindFirstOrThrowArgs} args - Arguments to find a EmployerInfo
     * @example
     * // Get one EmployerInfo
     * const employerInfo = await prisma.employerInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployerInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployerInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployerInfoClient<$Result.GetResult<Prisma.$EmployerInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployerInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployerInfos
     * const employerInfos = await prisma.employerInfo.findMany()
     * 
     * // Get first 10 EmployerInfos
     * const employerInfos = await prisma.employerInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employerInfoWithIdOnly = await prisma.employerInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployerInfoFindManyArgs>(args?: SelectSubset<T, EmployerInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployerInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployerInfo.
     * @param {EmployerInfoCreateArgs} args - Arguments to create a EmployerInfo.
     * @example
     * // Create one EmployerInfo
     * const EmployerInfo = await prisma.employerInfo.create({
     *   data: {
     *     // ... data to create a EmployerInfo
     *   }
     * })
     * 
     */
    create<T extends EmployerInfoCreateArgs>(args: SelectSubset<T, EmployerInfoCreateArgs<ExtArgs>>): Prisma__EmployerInfoClient<$Result.GetResult<Prisma.$EmployerInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployerInfos.
     * @param {EmployerInfoCreateManyArgs} args - Arguments to create many EmployerInfos.
     * @example
     * // Create many EmployerInfos
     * const employerInfo = await prisma.employerInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployerInfoCreateManyArgs>(args?: SelectSubset<T, EmployerInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployerInfos and returns the data saved in the database.
     * @param {EmployerInfoCreateManyAndReturnArgs} args - Arguments to create many EmployerInfos.
     * @example
     * // Create many EmployerInfos
     * const employerInfo = await prisma.employerInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployerInfos and only return the `id`
     * const employerInfoWithIdOnly = await prisma.employerInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployerInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployerInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployerInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployerInfo.
     * @param {EmployerInfoDeleteArgs} args - Arguments to delete one EmployerInfo.
     * @example
     * // Delete one EmployerInfo
     * const EmployerInfo = await prisma.employerInfo.delete({
     *   where: {
     *     // ... filter to delete one EmployerInfo
     *   }
     * })
     * 
     */
    delete<T extends EmployerInfoDeleteArgs>(args: SelectSubset<T, EmployerInfoDeleteArgs<ExtArgs>>): Prisma__EmployerInfoClient<$Result.GetResult<Prisma.$EmployerInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployerInfo.
     * @param {EmployerInfoUpdateArgs} args - Arguments to update one EmployerInfo.
     * @example
     * // Update one EmployerInfo
     * const employerInfo = await prisma.employerInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployerInfoUpdateArgs>(args: SelectSubset<T, EmployerInfoUpdateArgs<ExtArgs>>): Prisma__EmployerInfoClient<$Result.GetResult<Prisma.$EmployerInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployerInfos.
     * @param {EmployerInfoDeleteManyArgs} args - Arguments to filter EmployerInfos to delete.
     * @example
     * // Delete a few EmployerInfos
     * const { count } = await prisma.employerInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployerInfoDeleteManyArgs>(args?: SelectSubset<T, EmployerInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployerInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployerInfos
     * const employerInfo = await prisma.employerInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployerInfoUpdateManyArgs>(args: SelectSubset<T, EmployerInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployerInfos and returns the data updated in the database.
     * @param {EmployerInfoUpdateManyAndReturnArgs} args - Arguments to update many EmployerInfos.
     * @example
     * // Update many EmployerInfos
     * const employerInfo = await prisma.employerInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployerInfos and only return the `id`
     * const employerInfoWithIdOnly = await prisma.employerInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployerInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployerInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployerInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployerInfo.
     * @param {EmployerInfoUpsertArgs} args - Arguments to update or create a EmployerInfo.
     * @example
     * // Update or create a EmployerInfo
     * const employerInfo = await prisma.employerInfo.upsert({
     *   create: {
     *     // ... data to create a EmployerInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployerInfo we want to update
     *   }
     * })
     */
    upsert<T extends EmployerInfoUpsertArgs>(args: SelectSubset<T, EmployerInfoUpsertArgs<ExtArgs>>): Prisma__EmployerInfoClient<$Result.GetResult<Prisma.$EmployerInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployerInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerInfoCountArgs} args - Arguments to filter EmployerInfos to count.
     * @example
     * // Count the number of EmployerInfos
     * const count = await prisma.employerInfo.count({
     *   where: {
     *     // ... the filter for the EmployerInfos we want to count
     *   }
     * })
    **/
    count<T extends EmployerInfoCountArgs>(
      args?: Subset<T, EmployerInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployerInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployerInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployerInfoAggregateArgs>(args: Subset<T, EmployerInfoAggregateArgs>): Prisma.PrismaPromise<GetEmployerInfoAggregateType<T>>

    /**
     * Group by EmployerInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployerInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployerInfoGroupByArgs['orderBy'] }
        : { orderBy?: EmployerInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployerInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployerInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployerInfo model
   */
  readonly fields: EmployerInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployerInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployerInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmployerInfo model
   */
  interface EmployerInfoFieldRefs {
    readonly id: FieldRef<"EmployerInfo", 'Int'>
    readonly applicationId: FieldRef<"EmployerInfo", 'Int'>
    readonly registrationNumber: FieldRef<"EmployerInfo", 'String'>
    readonly companyType: FieldRef<"EmployerInfo", 'String'>
    readonly naceCode: FieldRef<"EmployerInfo", 'String'>
    readonly workplaceTitle: FieldRef<"EmployerInfo", 'String'>
    readonly phoneNumber: FieldRef<"EmployerInfo", 'String'>
    readonly ebildirgeName: FieldRef<"EmployerInfo", 'String'>
    readonly responsibleName: FieldRef<"EmployerInfo", 'String'>
    readonly currentEmail: FieldRef<"EmployerInfo", 'String'>
    readonly applicationEmail: FieldRef<"EmployerInfo", 'String'>
    readonly establishmentDate: FieldRef<"EmployerInfo", 'DateTime'>
    readonly mersisNumber: FieldRef<"EmployerInfo", 'String'>
    readonly taxOffice: FieldRef<"EmployerInfo", 'String'>
    readonly taxNumber: FieldRef<"EmployerInfo", 'String'>
    readonly workplaceAddress: FieldRef<"EmployerInfo", 'String'>
    readonly workAddress: FieldRef<"EmployerInfo", 'String'>
    readonly capitalStructure: FieldRef<"EmployerInfo", 'String'>
    readonly registeredCapitalTRY: FieldRef<"EmployerInfo", 'String'>
    readonly paidCapitalTRY: FieldRef<"EmployerInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmployerInfo findUnique
   */
  export type EmployerInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerInfo
     */
    select?: EmployerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerInfo
     */
    omit?: EmployerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInfoInclude<ExtArgs> | null
    /**
     * Filter, which EmployerInfo to fetch.
     */
    where: EmployerInfoWhereUniqueInput
  }

  /**
   * EmployerInfo findUniqueOrThrow
   */
  export type EmployerInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerInfo
     */
    select?: EmployerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerInfo
     */
    omit?: EmployerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInfoInclude<ExtArgs> | null
    /**
     * Filter, which EmployerInfo to fetch.
     */
    where: EmployerInfoWhereUniqueInput
  }

  /**
   * EmployerInfo findFirst
   */
  export type EmployerInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerInfo
     */
    select?: EmployerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerInfo
     */
    omit?: EmployerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInfoInclude<ExtArgs> | null
    /**
     * Filter, which EmployerInfo to fetch.
     */
    where?: EmployerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployerInfos to fetch.
     */
    orderBy?: EmployerInfoOrderByWithRelationInput | EmployerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployerInfos.
     */
    cursor?: EmployerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployerInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployerInfos.
     */
    distinct?: EmployerInfoScalarFieldEnum | EmployerInfoScalarFieldEnum[]
  }

  /**
   * EmployerInfo findFirstOrThrow
   */
  export type EmployerInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerInfo
     */
    select?: EmployerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerInfo
     */
    omit?: EmployerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInfoInclude<ExtArgs> | null
    /**
     * Filter, which EmployerInfo to fetch.
     */
    where?: EmployerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployerInfos to fetch.
     */
    orderBy?: EmployerInfoOrderByWithRelationInput | EmployerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployerInfos.
     */
    cursor?: EmployerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployerInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployerInfos.
     */
    distinct?: EmployerInfoScalarFieldEnum | EmployerInfoScalarFieldEnum[]
  }

  /**
   * EmployerInfo findMany
   */
  export type EmployerInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerInfo
     */
    select?: EmployerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerInfo
     */
    omit?: EmployerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInfoInclude<ExtArgs> | null
    /**
     * Filter, which EmployerInfos to fetch.
     */
    where?: EmployerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployerInfos to fetch.
     */
    orderBy?: EmployerInfoOrderByWithRelationInput | EmployerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployerInfos.
     */
    cursor?: EmployerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployerInfos.
     */
    skip?: number
    distinct?: EmployerInfoScalarFieldEnum | EmployerInfoScalarFieldEnum[]
  }

  /**
   * EmployerInfo create
   */
  export type EmployerInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerInfo
     */
    select?: EmployerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerInfo
     */
    omit?: EmployerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployerInfo.
     */
    data: XOR<EmployerInfoCreateInput, EmployerInfoUncheckedCreateInput>
  }

  /**
   * EmployerInfo createMany
   */
  export type EmployerInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployerInfos.
     */
    data: EmployerInfoCreateManyInput | EmployerInfoCreateManyInput[]
  }

  /**
   * EmployerInfo createManyAndReturn
   */
  export type EmployerInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerInfo
     */
    select?: EmployerInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerInfo
     */
    omit?: EmployerInfoOmit<ExtArgs> | null
    /**
     * The data used to create many EmployerInfos.
     */
    data: EmployerInfoCreateManyInput | EmployerInfoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployerInfo update
   */
  export type EmployerInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerInfo
     */
    select?: EmployerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerInfo
     */
    omit?: EmployerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployerInfo.
     */
    data: XOR<EmployerInfoUpdateInput, EmployerInfoUncheckedUpdateInput>
    /**
     * Choose, which EmployerInfo to update.
     */
    where: EmployerInfoWhereUniqueInput
  }

  /**
   * EmployerInfo updateMany
   */
  export type EmployerInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployerInfos.
     */
    data: XOR<EmployerInfoUpdateManyMutationInput, EmployerInfoUncheckedUpdateManyInput>
    /**
     * Filter which EmployerInfos to update
     */
    where?: EmployerInfoWhereInput
    /**
     * Limit how many EmployerInfos to update.
     */
    limit?: number
  }

  /**
   * EmployerInfo updateManyAndReturn
   */
  export type EmployerInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerInfo
     */
    select?: EmployerInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerInfo
     */
    omit?: EmployerInfoOmit<ExtArgs> | null
    /**
     * The data used to update EmployerInfos.
     */
    data: XOR<EmployerInfoUpdateManyMutationInput, EmployerInfoUncheckedUpdateManyInput>
    /**
     * Filter which EmployerInfos to update
     */
    where?: EmployerInfoWhereInput
    /**
     * Limit how many EmployerInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployerInfo upsert
   */
  export type EmployerInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerInfo
     */
    select?: EmployerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerInfo
     */
    omit?: EmployerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployerInfo to update in case it exists.
     */
    where: EmployerInfoWhereUniqueInput
    /**
     * In case the EmployerInfo found by the `where` argument doesn't exist, create a new EmployerInfo with this data.
     */
    create: XOR<EmployerInfoCreateInput, EmployerInfoUncheckedCreateInput>
    /**
     * In case the EmployerInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployerInfoUpdateInput, EmployerInfoUncheckedUpdateInput>
  }

  /**
   * EmployerInfo delete
   */
  export type EmployerInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerInfo
     */
    select?: EmployerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerInfo
     */
    omit?: EmployerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInfoInclude<ExtArgs> | null
    /**
     * Filter which EmployerInfo to delete.
     */
    where: EmployerInfoWhereUniqueInput
  }

  /**
   * EmployerInfo deleteMany
   */
  export type EmployerInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployerInfos to delete
     */
    where?: EmployerInfoWhereInput
    /**
     * Limit how many EmployerInfos to delete.
     */
    limit?: number
  }

  /**
   * EmployerInfo without action
   */
  export type EmployerInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerInfo
     */
    select?: EmployerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerInfo
     */
    omit?: EmployerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInfoInclude<ExtArgs> | null
  }


  /**
   * Model ApplicationHistory
   */

  export type AggregateApplicationHistory = {
    _count: ApplicationHistoryCountAggregateOutputType | null
    _avg: ApplicationHistoryAvgAggregateOutputType | null
    _sum: ApplicationHistorySumAggregateOutputType | null
    _min: ApplicationHistoryMinAggregateOutputType | null
    _max: ApplicationHistoryMaxAggregateOutputType | null
  }

  export type ApplicationHistoryAvgAggregateOutputType = {
    id: number | null
    applicationId: number | null
    userId: number | null
  }

  export type ApplicationHistorySumAggregateOutputType = {
    id: number | null
    applicationId: number | null
    userId: number | null
  }

  export type ApplicationHistoryMinAggregateOutputType = {
    id: number | null
    applicationId: number | null
    userId: number | null
    action: string | null
    comment: string | null
    createdAt: Date | null
  }

  export type ApplicationHistoryMaxAggregateOutputType = {
    id: number | null
    applicationId: number | null
    userId: number | null
    action: string | null
    comment: string | null
    createdAt: Date | null
  }

  export type ApplicationHistoryCountAggregateOutputType = {
    id: number
    applicationId: number
    userId: number
    action: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ApplicationHistoryAvgAggregateInputType = {
    id?: true
    applicationId?: true
    userId?: true
  }

  export type ApplicationHistorySumAggregateInputType = {
    id?: true
    applicationId?: true
    userId?: true
  }

  export type ApplicationHistoryMinAggregateInputType = {
    id?: true
    applicationId?: true
    userId?: true
    action?: true
    comment?: true
    createdAt?: true
  }

  export type ApplicationHistoryMaxAggregateInputType = {
    id?: true
    applicationId?: true
    userId?: true
    action?: true
    comment?: true
    createdAt?: true
  }

  export type ApplicationHistoryCountAggregateInputType = {
    id?: true
    applicationId?: true
    userId?: true
    action?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ApplicationHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationHistory to aggregate.
     */
    where?: ApplicationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationHistories to fetch.
     */
    orderBy?: ApplicationHistoryOrderByWithRelationInput | ApplicationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationHistories
    **/
    _count?: true | ApplicationHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationHistoryMaxAggregateInputType
  }

  export type GetApplicationHistoryAggregateType<T extends ApplicationHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationHistory[P]>
      : GetScalarType<T[P], AggregateApplicationHistory[P]>
  }




  export type ApplicationHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationHistoryWhereInput
    orderBy?: ApplicationHistoryOrderByWithAggregationInput | ApplicationHistoryOrderByWithAggregationInput[]
    by: ApplicationHistoryScalarFieldEnum[] | ApplicationHistoryScalarFieldEnum
    having?: ApplicationHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationHistoryCountAggregateInputType | true
    _avg?: ApplicationHistoryAvgAggregateInputType
    _sum?: ApplicationHistorySumAggregateInputType
    _min?: ApplicationHistoryMinAggregateInputType
    _max?: ApplicationHistoryMaxAggregateInputType
  }

  export type ApplicationHistoryGroupByOutputType = {
    id: number
    applicationId: number
    userId: number
    action: string
    comment: string | null
    createdAt: Date
    _count: ApplicationHistoryCountAggregateOutputType | null
    _avg: ApplicationHistoryAvgAggregateOutputType | null
    _sum: ApplicationHistorySumAggregateOutputType | null
    _min: ApplicationHistoryMinAggregateOutputType | null
    _max: ApplicationHistoryMaxAggregateOutputType | null
  }

  type GetApplicationHistoryGroupByPayload<T extends ApplicationHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    userId?: boolean
    action?: boolean
    comment?: boolean
    createdAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationHistory"]>

  export type ApplicationHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    userId?: boolean
    action?: boolean
    comment?: boolean
    createdAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationHistory"]>

  export type ApplicationHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    userId?: boolean
    action?: boolean
    comment?: boolean
    createdAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationHistory"]>

  export type ApplicationHistorySelectScalar = {
    id?: boolean
    applicationId?: boolean
    userId?: boolean
    action?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ApplicationHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "userId" | "action" | "comment" | "createdAt", ExtArgs["result"]["applicationHistory"]>
  export type ApplicationHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApplicationHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationHistory"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: number
      userId: number
      action: string
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["applicationHistory"]>
    composites: {}
  }

  type ApplicationHistoryGetPayload<S extends boolean | null | undefined | ApplicationHistoryDefaultArgs> = $Result.GetResult<Prisma.$ApplicationHistoryPayload, S>

  type ApplicationHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationHistoryCountAggregateInputType | true
    }

  export interface ApplicationHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationHistory'], meta: { name: 'ApplicationHistory' } }
    /**
     * Find zero or one ApplicationHistory that matches the filter.
     * @param {ApplicationHistoryFindUniqueArgs} args - Arguments to find a ApplicationHistory
     * @example
     * // Get one ApplicationHistory
     * const applicationHistory = await prisma.applicationHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationHistoryFindUniqueArgs>(args: SelectSubset<T, ApplicationHistoryFindUniqueArgs<ExtArgs>>): Prisma__ApplicationHistoryClient<$Result.GetResult<Prisma.$ApplicationHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplicationHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationHistoryFindUniqueOrThrowArgs} args - Arguments to find a ApplicationHistory
     * @example
     * // Get one ApplicationHistory
     * const applicationHistory = await prisma.applicationHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationHistoryClient<$Result.GetResult<Prisma.$ApplicationHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationHistoryFindFirstArgs} args - Arguments to find a ApplicationHistory
     * @example
     * // Get one ApplicationHistory
     * const applicationHistory = await prisma.applicationHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationHistoryFindFirstArgs>(args?: SelectSubset<T, ApplicationHistoryFindFirstArgs<ExtArgs>>): Prisma__ApplicationHistoryClient<$Result.GetResult<Prisma.$ApplicationHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationHistoryFindFirstOrThrowArgs} args - Arguments to find a ApplicationHistory
     * @example
     * // Get one ApplicationHistory
     * const applicationHistory = await prisma.applicationHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationHistoryClient<$Result.GetResult<Prisma.$ApplicationHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplicationHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationHistories
     * const applicationHistories = await prisma.applicationHistory.findMany()
     * 
     * // Get first 10 ApplicationHistories
     * const applicationHistories = await prisma.applicationHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationHistoryWithIdOnly = await prisma.applicationHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationHistoryFindManyArgs>(args?: SelectSubset<T, ApplicationHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplicationHistory.
     * @param {ApplicationHistoryCreateArgs} args - Arguments to create a ApplicationHistory.
     * @example
     * // Create one ApplicationHistory
     * const ApplicationHistory = await prisma.applicationHistory.create({
     *   data: {
     *     // ... data to create a ApplicationHistory
     *   }
     * })
     * 
     */
    create<T extends ApplicationHistoryCreateArgs>(args: SelectSubset<T, ApplicationHistoryCreateArgs<ExtArgs>>): Prisma__ApplicationHistoryClient<$Result.GetResult<Prisma.$ApplicationHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplicationHistories.
     * @param {ApplicationHistoryCreateManyArgs} args - Arguments to create many ApplicationHistories.
     * @example
     * // Create many ApplicationHistories
     * const applicationHistory = await prisma.applicationHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationHistoryCreateManyArgs>(args?: SelectSubset<T, ApplicationHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicationHistories and returns the data saved in the database.
     * @param {ApplicationHistoryCreateManyAndReturnArgs} args - Arguments to create many ApplicationHistories.
     * @example
     * // Create many ApplicationHistories
     * const applicationHistory = await prisma.applicationHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicationHistories and only return the `id`
     * const applicationHistoryWithIdOnly = await prisma.applicationHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplicationHistory.
     * @param {ApplicationHistoryDeleteArgs} args - Arguments to delete one ApplicationHistory.
     * @example
     * // Delete one ApplicationHistory
     * const ApplicationHistory = await prisma.applicationHistory.delete({
     *   where: {
     *     // ... filter to delete one ApplicationHistory
     *   }
     * })
     * 
     */
    delete<T extends ApplicationHistoryDeleteArgs>(args: SelectSubset<T, ApplicationHistoryDeleteArgs<ExtArgs>>): Prisma__ApplicationHistoryClient<$Result.GetResult<Prisma.$ApplicationHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplicationHistory.
     * @param {ApplicationHistoryUpdateArgs} args - Arguments to update one ApplicationHistory.
     * @example
     * // Update one ApplicationHistory
     * const applicationHistory = await prisma.applicationHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationHistoryUpdateArgs>(args: SelectSubset<T, ApplicationHistoryUpdateArgs<ExtArgs>>): Prisma__ApplicationHistoryClient<$Result.GetResult<Prisma.$ApplicationHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplicationHistories.
     * @param {ApplicationHistoryDeleteManyArgs} args - Arguments to filter ApplicationHistories to delete.
     * @example
     * // Delete a few ApplicationHistories
     * const { count } = await prisma.applicationHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationHistoryDeleteManyArgs>(args?: SelectSubset<T, ApplicationHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationHistories
     * const applicationHistory = await prisma.applicationHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationHistoryUpdateManyArgs>(args: SelectSubset<T, ApplicationHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationHistories and returns the data updated in the database.
     * @param {ApplicationHistoryUpdateManyAndReturnArgs} args - Arguments to update many ApplicationHistories.
     * @example
     * // Update many ApplicationHistories
     * const applicationHistory = await prisma.applicationHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplicationHistories and only return the `id`
     * const applicationHistoryWithIdOnly = await prisma.applicationHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplicationHistory.
     * @param {ApplicationHistoryUpsertArgs} args - Arguments to update or create a ApplicationHistory.
     * @example
     * // Update or create a ApplicationHistory
     * const applicationHistory = await prisma.applicationHistory.upsert({
     *   create: {
     *     // ... data to create a ApplicationHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationHistory we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationHistoryUpsertArgs>(args: SelectSubset<T, ApplicationHistoryUpsertArgs<ExtArgs>>): Prisma__ApplicationHistoryClient<$Result.GetResult<Prisma.$ApplicationHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplicationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationHistoryCountArgs} args - Arguments to filter ApplicationHistories to count.
     * @example
     * // Count the number of ApplicationHistories
     * const count = await prisma.applicationHistory.count({
     *   where: {
     *     // ... the filter for the ApplicationHistories we want to count
     *   }
     * })
    **/
    count<T extends ApplicationHistoryCountArgs>(
      args?: Subset<T, ApplicationHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationHistoryAggregateArgs>(args: Subset<T, ApplicationHistoryAggregateArgs>): Prisma.PrismaPromise<GetApplicationHistoryAggregateType<T>>

    /**
     * Group by ApplicationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationHistory model
   */
  readonly fields: ApplicationHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApplicationHistory model
   */
  interface ApplicationHistoryFieldRefs {
    readonly id: FieldRef<"ApplicationHistory", 'Int'>
    readonly applicationId: FieldRef<"ApplicationHistory", 'Int'>
    readonly userId: FieldRef<"ApplicationHistory", 'Int'>
    readonly action: FieldRef<"ApplicationHistory", 'String'>
    readonly comment: FieldRef<"ApplicationHistory", 'String'>
    readonly createdAt: FieldRef<"ApplicationHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationHistory findUnique
   */
  export type ApplicationHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationHistory
     */
    select?: ApplicationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationHistory
     */
    omit?: ApplicationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationHistory to fetch.
     */
    where: ApplicationHistoryWhereUniqueInput
  }

  /**
   * ApplicationHistory findUniqueOrThrow
   */
  export type ApplicationHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationHistory
     */
    select?: ApplicationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationHistory
     */
    omit?: ApplicationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationHistory to fetch.
     */
    where: ApplicationHistoryWhereUniqueInput
  }

  /**
   * ApplicationHistory findFirst
   */
  export type ApplicationHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationHistory
     */
    select?: ApplicationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationHistory
     */
    omit?: ApplicationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationHistory to fetch.
     */
    where?: ApplicationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationHistories to fetch.
     */
    orderBy?: ApplicationHistoryOrderByWithRelationInput | ApplicationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationHistories.
     */
    cursor?: ApplicationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationHistories.
     */
    distinct?: ApplicationHistoryScalarFieldEnum | ApplicationHistoryScalarFieldEnum[]
  }

  /**
   * ApplicationHistory findFirstOrThrow
   */
  export type ApplicationHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationHistory
     */
    select?: ApplicationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationHistory
     */
    omit?: ApplicationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationHistory to fetch.
     */
    where?: ApplicationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationHistories to fetch.
     */
    orderBy?: ApplicationHistoryOrderByWithRelationInput | ApplicationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationHistories.
     */
    cursor?: ApplicationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationHistories.
     */
    distinct?: ApplicationHistoryScalarFieldEnum | ApplicationHistoryScalarFieldEnum[]
  }

  /**
   * ApplicationHistory findMany
   */
  export type ApplicationHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationHistory
     */
    select?: ApplicationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationHistory
     */
    omit?: ApplicationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationHistories to fetch.
     */
    where?: ApplicationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationHistories to fetch.
     */
    orderBy?: ApplicationHistoryOrderByWithRelationInput | ApplicationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationHistories.
     */
    cursor?: ApplicationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationHistories.
     */
    skip?: number
    distinct?: ApplicationHistoryScalarFieldEnum | ApplicationHistoryScalarFieldEnum[]
  }

  /**
   * ApplicationHistory create
   */
  export type ApplicationHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationHistory
     */
    select?: ApplicationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationHistory
     */
    omit?: ApplicationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicationHistory.
     */
    data: XOR<ApplicationHistoryCreateInput, ApplicationHistoryUncheckedCreateInput>
  }

  /**
   * ApplicationHistory createMany
   */
  export type ApplicationHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationHistories.
     */
    data: ApplicationHistoryCreateManyInput | ApplicationHistoryCreateManyInput[]
  }

  /**
   * ApplicationHistory createManyAndReturn
   */
  export type ApplicationHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationHistory
     */
    select?: ApplicationHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationHistory
     */
    omit?: ApplicationHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ApplicationHistories.
     */
    data: ApplicationHistoryCreateManyInput | ApplicationHistoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationHistory update
   */
  export type ApplicationHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationHistory
     */
    select?: ApplicationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationHistory
     */
    omit?: ApplicationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicationHistory.
     */
    data: XOR<ApplicationHistoryUpdateInput, ApplicationHistoryUncheckedUpdateInput>
    /**
     * Choose, which ApplicationHistory to update.
     */
    where: ApplicationHistoryWhereUniqueInput
  }

  /**
   * ApplicationHistory updateMany
   */
  export type ApplicationHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationHistories.
     */
    data: XOR<ApplicationHistoryUpdateManyMutationInput, ApplicationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationHistories to update
     */
    where?: ApplicationHistoryWhereInput
    /**
     * Limit how many ApplicationHistories to update.
     */
    limit?: number
  }

  /**
   * ApplicationHistory updateManyAndReturn
   */
  export type ApplicationHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationHistory
     */
    select?: ApplicationHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationHistory
     */
    omit?: ApplicationHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ApplicationHistories.
     */
    data: XOR<ApplicationHistoryUpdateManyMutationInput, ApplicationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationHistories to update
     */
    where?: ApplicationHistoryWhereInput
    /**
     * Limit how many ApplicationHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationHistory upsert
   */
  export type ApplicationHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationHistory
     */
    select?: ApplicationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationHistory
     */
    omit?: ApplicationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicationHistory to update in case it exists.
     */
    where: ApplicationHistoryWhereUniqueInput
    /**
     * In case the ApplicationHistory found by the `where` argument doesn't exist, create a new ApplicationHistory with this data.
     */
    create: XOR<ApplicationHistoryCreateInput, ApplicationHistoryUncheckedCreateInput>
    /**
     * In case the ApplicationHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationHistoryUpdateInput, ApplicationHistoryUncheckedUpdateInput>
  }

  /**
   * ApplicationHistory delete
   */
  export type ApplicationHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationHistory
     */
    select?: ApplicationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationHistory
     */
    omit?: ApplicationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationHistoryInclude<ExtArgs> | null
    /**
     * Filter which ApplicationHistory to delete.
     */
    where: ApplicationHistoryWhereUniqueInput
  }

  /**
   * ApplicationHistory deleteMany
   */
  export type ApplicationHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationHistories to delete
     */
    where?: ApplicationHistoryWhereInput
    /**
     * Limit how many ApplicationHistories to delete.
     */
    limit?: number
  }

  /**
   * ApplicationHistory without action
   */
  export type ApplicationHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationHistory
     */
    select?: ApplicationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationHistory
     */
    omit?: ApplicationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ApplicationWorkflow
   */

  export type AggregateApplicationWorkflow = {
    _count: ApplicationWorkflowCountAggregateOutputType | null
    _avg: ApplicationWorkflowAvgAggregateOutputType | null
    _sum: ApplicationWorkflowSumAggregateOutputType | null
    _min: ApplicationWorkflowMinAggregateOutputType | null
    _max: ApplicationWorkflowMaxAggregateOutputType | null
  }

  export type ApplicationWorkflowAvgAggregateOutputType = {
    id: number | null
    applicationId: number | null
    currentUserId: number | null
  }

  export type ApplicationWorkflowSumAggregateOutputType = {
    id: number | null
    applicationId: number | null
    currentUserId: number | null
  }

  export type ApplicationWorkflowMinAggregateOutputType = {
    id: number | null
    applicationId: number | null
    currentUserId: number | null
    assignedAt: Date | null
  }

  export type ApplicationWorkflowMaxAggregateOutputType = {
    id: number | null
    applicationId: number | null
    currentUserId: number | null
    assignedAt: Date | null
  }

  export type ApplicationWorkflowCountAggregateOutputType = {
    id: number
    applicationId: number
    currentUserId: number
    assignedAt: number
    _all: number
  }


  export type ApplicationWorkflowAvgAggregateInputType = {
    id?: true
    applicationId?: true
    currentUserId?: true
  }

  export type ApplicationWorkflowSumAggregateInputType = {
    id?: true
    applicationId?: true
    currentUserId?: true
  }

  export type ApplicationWorkflowMinAggregateInputType = {
    id?: true
    applicationId?: true
    currentUserId?: true
    assignedAt?: true
  }

  export type ApplicationWorkflowMaxAggregateInputType = {
    id?: true
    applicationId?: true
    currentUserId?: true
    assignedAt?: true
  }

  export type ApplicationWorkflowCountAggregateInputType = {
    id?: true
    applicationId?: true
    currentUserId?: true
    assignedAt?: true
    _all?: true
  }

  export type ApplicationWorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationWorkflow to aggregate.
     */
    where?: ApplicationWorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationWorkflows to fetch.
     */
    orderBy?: ApplicationWorkflowOrderByWithRelationInput | ApplicationWorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationWorkflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationWorkflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationWorkflows
    **/
    _count?: true | ApplicationWorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationWorkflowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationWorkflowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationWorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationWorkflowMaxAggregateInputType
  }

  export type GetApplicationWorkflowAggregateType<T extends ApplicationWorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationWorkflow[P]>
      : GetScalarType<T[P], AggregateApplicationWorkflow[P]>
  }




  export type ApplicationWorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWorkflowWhereInput
    orderBy?: ApplicationWorkflowOrderByWithAggregationInput | ApplicationWorkflowOrderByWithAggregationInput[]
    by: ApplicationWorkflowScalarFieldEnum[] | ApplicationWorkflowScalarFieldEnum
    having?: ApplicationWorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationWorkflowCountAggregateInputType | true
    _avg?: ApplicationWorkflowAvgAggregateInputType
    _sum?: ApplicationWorkflowSumAggregateInputType
    _min?: ApplicationWorkflowMinAggregateInputType
    _max?: ApplicationWorkflowMaxAggregateInputType
  }

  export type ApplicationWorkflowGroupByOutputType = {
    id: number
    applicationId: number
    currentUserId: number
    assignedAt: Date
    _count: ApplicationWorkflowCountAggregateOutputType | null
    _avg: ApplicationWorkflowAvgAggregateOutputType | null
    _sum: ApplicationWorkflowSumAggregateOutputType | null
    _min: ApplicationWorkflowMinAggregateOutputType | null
    _max: ApplicationWorkflowMaxAggregateOutputType | null
  }

  type GetApplicationWorkflowGroupByPayload<T extends ApplicationWorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationWorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationWorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationWorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationWorkflowGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationWorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    currentUserId?: boolean
    assignedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    currentUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationWorkflow"]>

  export type ApplicationWorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    currentUserId?: boolean
    assignedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    currentUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationWorkflow"]>

  export type ApplicationWorkflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    currentUserId?: boolean
    assignedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    currentUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationWorkflow"]>

  export type ApplicationWorkflowSelectScalar = {
    id?: boolean
    applicationId?: boolean
    currentUserId?: boolean
    assignedAt?: boolean
  }

  export type ApplicationWorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "currentUserId" | "assignedAt", ExtArgs["result"]["applicationWorkflow"]>
  export type ApplicationWorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    currentUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationWorkflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    currentUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationWorkflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    currentUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApplicationWorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationWorkflow"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
      currentUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: number
      currentUserId: number
      assignedAt: Date
    }, ExtArgs["result"]["applicationWorkflow"]>
    composites: {}
  }

  type ApplicationWorkflowGetPayload<S extends boolean | null | undefined | ApplicationWorkflowDefaultArgs> = $Result.GetResult<Prisma.$ApplicationWorkflowPayload, S>

  type ApplicationWorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationWorkflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationWorkflowCountAggregateInputType | true
    }

  export interface ApplicationWorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationWorkflow'], meta: { name: 'ApplicationWorkflow' } }
    /**
     * Find zero or one ApplicationWorkflow that matches the filter.
     * @param {ApplicationWorkflowFindUniqueArgs} args - Arguments to find a ApplicationWorkflow
     * @example
     * // Get one ApplicationWorkflow
     * const applicationWorkflow = await prisma.applicationWorkflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationWorkflowFindUniqueArgs>(args: SelectSubset<T, ApplicationWorkflowFindUniqueArgs<ExtArgs>>): Prisma__ApplicationWorkflowClient<$Result.GetResult<Prisma.$ApplicationWorkflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplicationWorkflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationWorkflowFindUniqueOrThrowArgs} args - Arguments to find a ApplicationWorkflow
     * @example
     * // Get one ApplicationWorkflow
     * const applicationWorkflow = await prisma.applicationWorkflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationWorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationWorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationWorkflowClient<$Result.GetResult<Prisma.$ApplicationWorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationWorkflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationWorkflowFindFirstArgs} args - Arguments to find a ApplicationWorkflow
     * @example
     * // Get one ApplicationWorkflow
     * const applicationWorkflow = await prisma.applicationWorkflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationWorkflowFindFirstArgs>(args?: SelectSubset<T, ApplicationWorkflowFindFirstArgs<ExtArgs>>): Prisma__ApplicationWorkflowClient<$Result.GetResult<Prisma.$ApplicationWorkflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationWorkflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationWorkflowFindFirstOrThrowArgs} args - Arguments to find a ApplicationWorkflow
     * @example
     * // Get one ApplicationWorkflow
     * const applicationWorkflow = await prisma.applicationWorkflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationWorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationWorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationWorkflowClient<$Result.GetResult<Prisma.$ApplicationWorkflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplicationWorkflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationWorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationWorkflows
     * const applicationWorkflows = await prisma.applicationWorkflow.findMany()
     * 
     * // Get first 10 ApplicationWorkflows
     * const applicationWorkflows = await prisma.applicationWorkflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWorkflowWithIdOnly = await prisma.applicationWorkflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationWorkflowFindManyArgs>(args?: SelectSubset<T, ApplicationWorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationWorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplicationWorkflow.
     * @param {ApplicationWorkflowCreateArgs} args - Arguments to create a ApplicationWorkflow.
     * @example
     * // Create one ApplicationWorkflow
     * const ApplicationWorkflow = await prisma.applicationWorkflow.create({
     *   data: {
     *     // ... data to create a ApplicationWorkflow
     *   }
     * })
     * 
     */
    create<T extends ApplicationWorkflowCreateArgs>(args: SelectSubset<T, ApplicationWorkflowCreateArgs<ExtArgs>>): Prisma__ApplicationWorkflowClient<$Result.GetResult<Prisma.$ApplicationWorkflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplicationWorkflows.
     * @param {ApplicationWorkflowCreateManyArgs} args - Arguments to create many ApplicationWorkflows.
     * @example
     * // Create many ApplicationWorkflows
     * const applicationWorkflow = await prisma.applicationWorkflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationWorkflowCreateManyArgs>(args?: SelectSubset<T, ApplicationWorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicationWorkflows and returns the data saved in the database.
     * @param {ApplicationWorkflowCreateManyAndReturnArgs} args - Arguments to create many ApplicationWorkflows.
     * @example
     * // Create many ApplicationWorkflows
     * const applicationWorkflow = await prisma.applicationWorkflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicationWorkflows and only return the `id`
     * const applicationWorkflowWithIdOnly = await prisma.applicationWorkflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationWorkflowCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationWorkflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationWorkflowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplicationWorkflow.
     * @param {ApplicationWorkflowDeleteArgs} args - Arguments to delete one ApplicationWorkflow.
     * @example
     * // Delete one ApplicationWorkflow
     * const ApplicationWorkflow = await prisma.applicationWorkflow.delete({
     *   where: {
     *     // ... filter to delete one ApplicationWorkflow
     *   }
     * })
     * 
     */
    delete<T extends ApplicationWorkflowDeleteArgs>(args: SelectSubset<T, ApplicationWorkflowDeleteArgs<ExtArgs>>): Prisma__ApplicationWorkflowClient<$Result.GetResult<Prisma.$ApplicationWorkflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplicationWorkflow.
     * @param {ApplicationWorkflowUpdateArgs} args - Arguments to update one ApplicationWorkflow.
     * @example
     * // Update one ApplicationWorkflow
     * const applicationWorkflow = await prisma.applicationWorkflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationWorkflowUpdateArgs>(args: SelectSubset<T, ApplicationWorkflowUpdateArgs<ExtArgs>>): Prisma__ApplicationWorkflowClient<$Result.GetResult<Prisma.$ApplicationWorkflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplicationWorkflows.
     * @param {ApplicationWorkflowDeleteManyArgs} args - Arguments to filter ApplicationWorkflows to delete.
     * @example
     * // Delete a few ApplicationWorkflows
     * const { count } = await prisma.applicationWorkflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationWorkflowDeleteManyArgs>(args?: SelectSubset<T, ApplicationWorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationWorkflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationWorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationWorkflows
     * const applicationWorkflow = await prisma.applicationWorkflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationWorkflowUpdateManyArgs>(args: SelectSubset<T, ApplicationWorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationWorkflows and returns the data updated in the database.
     * @param {ApplicationWorkflowUpdateManyAndReturnArgs} args - Arguments to update many ApplicationWorkflows.
     * @example
     * // Update many ApplicationWorkflows
     * const applicationWorkflow = await prisma.applicationWorkflow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplicationWorkflows and only return the `id`
     * const applicationWorkflowWithIdOnly = await prisma.applicationWorkflow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationWorkflowUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationWorkflowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationWorkflowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplicationWorkflow.
     * @param {ApplicationWorkflowUpsertArgs} args - Arguments to update or create a ApplicationWorkflow.
     * @example
     * // Update or create a ApplicationWorkflow
     * const applicationWorkflow = await prisma.applicationWorkflow.upsert({
     *   create: {
     *     // ... data to create a ApplicationWorkflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationWorkflow we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationWorkflowUpsertArgs>(args: SelectSubset<T, ApplicationWorkflowUpsertArgs<ExtArgs>>): Prisma__ApplicationWorkflowClient<$Result.GetResult<Prisma.$ApplicationWorkflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplicationWorkflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationWorkflowCountArgs} args - Arguments to filter ApplicationWorkflows to count.
     * @example
     * // Count the number of ApplicationWorkflows
     * const count = await prisma.applicationWorkflow.count({
     *   where: {
     *     // ... the filter for the ApplicationWorkflows we want to count
     *   }
     * })
    **/
    count<T extends ApplicationWorkflowCountArgs>(
      args?: Subset<T, ApplicationWorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationWorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationWorkflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationWorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationWorkflowAggregateArgs>(args: Subset<T, ApplicationWorkflowAggregateArgs>): Prisma.PrismaPromise<GetApplicationWorkflowAggregateType<T>>

    /**
     * Group by ApplicationWorkflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationWorkflowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationWorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationWorkflowGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationWorkflowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationWorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationWorkflow model
   */
  readonly fields: ApplicationWorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationWorkflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationWorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currentUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApplicationWorkflow model
   */
  interface ApplicationWorkflowFieldRefs {
    readonly id: FieldRef<"ApplicationWorkflow", 'Int'>
    readonly applicationId: FieldRef<"ApplicationWorkflow", 'Int'>
    readonly currentUserId: FieldRef<"ApplicationWorkflow", 'Int'>
    readonly assignedAt: FieldRef<"ApplicationWorkflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationWorkflow findUnique
   */
  export type ApplicationWorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationWorkflow
     */
    select?: ApplicationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationWorkflow
     */
    omit?: ApplicationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationWorkflowInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationWorkflow to fetch.
     */
    where: ApplicationWorkflowWhereUniqueInput
  }

  /**
   * ApplicationWorkflow findUniqueOrThrow
   */
  export type ApplicationWorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationWorkflow
     */
    select?: ApplicationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationWorkflow
     */
    omit?: ApplicationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationWorkflowInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationWorkflow to fetch.
     */
    where: ApplicationWorkflowWhereUniqueInput
  }

  /**
   * ApplicationWorkflow findFirst
   */
  export type ApplicationWorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationWorkflow
     */
    select?: ApplicationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationWorkflow
     */
    omit?: ApplicationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationWorkflowInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationWorkflow to fetch.
     */
    where?: ApplicationWorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationWorkflows to fetch.
     */
    orderBy?: ApplicationWorkflowOrderByWithRelationInput | ApplicationWorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationWorkflows.
     */
    cursor?: ApplicationWorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationWorkflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationWorkflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationWorkflows.
     */
    distinct?: ApplicationWorkflowScalarFieldEnum | ApplicationWorkflowScalarFieldEnum[]
  }

  /**
   * ApplicationWorkflow findFirstOrThrow
   */
  export type ApplicationWorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationWorkflow
     */
    select?: ApplicationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationWorkflow
     */
    omit?: ApplicationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationWorkflowInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationWorkflow to fetch.
     */
    where?: ApplicationWorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationWorkflows to fetch.
     */
    orderBy?: ApplicationWorkflowOrderByWithRelationInput | ApplicationWorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationWorkflows.
     */
    cursor?: ApplicationWorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationWorkflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationWorkflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationWorkflows.
     */
    distinct?: ApplicationWorkflowScalarFieldEnum | ApplicationWorkflowScalarFieldEnum[]
  }

  /**
   * ApplicationWorkflow findMany
   */
  export type ApplicationWorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationWorkflow
     */
    select?: ApplicationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationWorkflow
     */
    omit?: ApplicationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationWorkflowInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationWorkflows to fetch.
     */
    where?: ApplicationWorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationWorkflows to fetch.
     */
    orderBy?: ApplicationWorkflowOrderByWithRelationInput | ApplicationWorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationWorkflows.
     */
    cursor?: ApplicationWorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationWorkflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationWorkflows.
     */
    skip?: number
    distinct?: ApplicationWorkflowScalarFieldEnum | ApplicationWorkflowScalarFieldEnum[]
  }

  /**
   * ApplicationWorkflow create
   */
  export type ApplicationWorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationWorkflow
     */
    select?: ApplicationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationWorkflow
     */
    omit?: ApplicationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationWorkflowInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicationWorkflow.
     */
    data: XOR<ApplicationWorkflowCreateInput, ApplicationWorkflowUncheckedCreateInput>
  }

  /**
   * ApplicationWorkflow createMany
   */
  export type ApplicationWorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationWorkflows.
     */
    data: ApplicationWorkflowCreateManyInput | ApplicationWorkflowCreateManyInput[]
  }

  /**
   * ApplicationWorkflow createManyAndReturn
   */
  export type ApplicationWorkflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationWorkflow
     */
    select?: ApplicationWorkflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationWorkflow
     */
    omit?: ApplicationWorkflowOmit<ExtArgs> | null
    /**
     * The data used to create many ApplicationWorkflows.
     */
    data: ApplicationWorkflowCreateManyInput | ApplicationWorkflowCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationWorkflowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationWorkflow update
   */
  export type ApplicationWorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationWorkflow
     */
    select?: ApplicationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationWorkflow
     */
    omit?: ApplicationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationWorkflowInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicationWorkflow.
     */
    data: XOR<ApplicationWorkflowUpdateInput, ApplicationWorkflowUncheckedUpdateInput>
    /**
     * Choose, which ApplicationWorkflow to update.
     */
    where: ApplicationWorkflowWhereUniqueInput
  }

  /**
   * ApplicationWorkflow updateMany
   */
  export type ApplicationWorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationWorkflows.
     */
    data: XOR<ApplicationWorkflowUpdateManyMutationInput, ApplicationWorkflowUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationWorkflows to update
     */
    where?: ApplicationWorkflowWhereInput
    /**
     * Limit how many ApplicationWorkflows to update.
     */
    limit?: number
  }

  /**
   * ApplicationWorkflow updateManyAndReturn
   */
  export type ApplicationWorkflowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationWorkflow
     */
    select?: ApplicationWorkflowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationWorkflow
     */
    omit?: ApplicationWorkflowOmit<ExtArgs> | null
    /**
     * The data used to update ApplicationWorkflows.
     */
    data: XOR<ApplicationWorkflowUpdateManyMutationInput, ApplicationWorkflowUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationWorkflows to update
     */
    where?: ApplicationWorkflowWhereInput
    /**
     * Limit how many ApplicationWorkflows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationWorkflowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationWorkflow upsert
   */
  export type ApplicationWorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationWorkflow
     */
    select?: ApplicationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationWorkflow
     */
    omit?: ApplicationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationWorkflowInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicationWorkflow to update in case it exists.
     */
    where: ApplicationWorkflowWhereUniqueInput
    /**
     * In case the ApplicationWorkflow found by the `where` argument doesn't exist, create a new ApplicationWorkflow with this data.
     */
    create: XOR<ApplicationWorkflowCreateInput, ApplicationWorkflowUncheckedCreateInput>
    /**
     * In case the ApplicationWorkflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationWorkflowUpdateInput, ApplicationWorkflowUncheckedUpdateInput>
  }

  /**
   * ApplicationWorkflow delete
   */
  export type ApplicationWorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationWorkflow
     */
    select?: ApplicationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationWorkflow
     */
    omit?: ApplicationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationWorkflowInclude<ExtArgs> | null
    /**
     * Filter which ApplicationWorkflow to delete.
     */
    where: ApplicationWorkflowWhereUniqueInput
  }

  /**
   * ApplicationWorkflow deleteMany
   */
  export type ApplicationWorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationWorkflows to delete
     */
    where?: ApplicationWorkflowWhereInput
    /**
     * Limit how many ApplicationWorkflows to delete.
     */
    limit?: number
  }

  /**
   * ApplicationWorkflow without action
   */
  export type ApplicationWorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationWorkflow
     */
    select?: ApplicationWorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationWorkflow
     */
    omit?: ApplicationWorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationWorkflowInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    applicationNumber: 'applicationNumber',
    applicantId: 'applicantId',
    status: 'status',
    applicationDate: 'applicationDate',
    applicationType: 'applicationType',
    izinStartDate: 'izinStartDate',
    izinEndDate: 'izinEndDate',
    ytbScholarshipStatus: 'ytbScholarshipStatus',
    foreignReferenceNumber: 'foreignReferenceNumber',
    foreignIdentityNumber: 'foreignIdentityNumber',
    firstName: 'firstName',
    lastName: 'lastName',
    fatherName: 'fatherName',
    motherName: 'motherName',
    gender: 'gender',
    placeOfBirth: 'placeOfBirth',
    dateOfBirth: 'dateOfBirth',
    maritalStatus: 'maritalStatus',
    nationality: 'nationality',
    passportType: 'passportType',
    passportNumber: 'passportNumber',
    passportExpiryDate: 'passportExpiryDate',
    passportRemainingPeriod: 'passportRemainingPeriod',
    residenceAddress: 'residenceAddress',
    email: 'email',
    phoneNumber: 'phoneNumber',
    motherLanguage: 'motherLanguage',
    turkishLevel: 'turkishLevel',
    knownLanguages: 'knownLanguages',
    educationLevel: 'educationLevel',
    specializationField: 'specializationField',
    graduatedSchoolName: 'graduatedSchoolName',
    diplomaProfession: 'diplomaProfession',
    jobTitle: 'jobTitle',
    jobDescription: 'jobDescription',
    employmentReason: 'employmentReason',
    employmentType: 'employmentType',
    employmentDuration: 'employmentDuration',
    permitType: 'permitType',
    grossSalary: 'grossSalary',
    isCompanyPartner: 'isCompanyPartner',
    isPremiumAbroad: 'isPremiumAbroad',
    isHomeServiceJob: 'isHomeServiceJob',
    isTechRequired: 'isTechRequired',
    isTubitakEmployee: 'isTubitakEmployee',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const ApplicationDocumentsScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    applicationPetition: 'applicationPetition',
    passport: 'passport',
    employmentContract: 'employmentContract',
    diploma: 'diploma',
    additionalDocument: 'additionalDocument',
    employmentNotification: 'employmentNotification',
    permitTerminationPetition: 'permitTerminationPetition',
    activityCertificate: 'activityCertificate',
    tradeRegistryGazette: 'tradeRegistryGazette',
    balanceSheet: 'balanceSheet',
    tourismLicense: 'tourismLicense'
  };

  export type ApplicationDocumentsScalarFieldEnum = (typeof ApplicationDocumentsScalarFieldEnum)[keyof typeof ApplicationDocumentsScalarFieldEnum]


  export const EmployerInfoScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    registrationNumber: 'registrationNumber',
    companyType: 'companyType',
    naceCode: 'naceCode',
    workplaceTitle: 'workplaceTitle',
    phoneNumber: 'phoneNumber',
    ebildirgeName: 'ebildirgeName',
    responsibleName: 'responsibleName',
    currentEmail: 'currentEmail',
    applicationEmail: 'applicationEmail',
    establishmentDate: 'establishmentDate',
    mersisNumber: 'mersisNumber',
    taxOffice: 'taxOffice',
    taxNumber: 'taxNumber',
    workplaceAddress: 'workplaceAddress',
    workAddress: 'workAddress',
    capitalStructure: 'capitalStructure',
    registeredCapitalTRY: 'registeredCapitalTRY',
    paidCapitalTRY: 'paidCapitalTRY'
  };

  export type EmployerInfoScalarFieldEnum = (typeof EmployerInfoScalarFieldEnum)[keyof typeof EmployerInfoScalarFieldEnum]


  export const ApplicationHistoryScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    userId: 'userId',
    action: 'action',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ApplicationHistoryScalarFieldEnum = (typeof ApplicationHistoryScalarFieldEnum)[keyof typeof ApplicationHistoryScalarFieldEnum]


  export const ApplicationWorkflowScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    currentUserId: 'currentUserId',
    assignedAt: 'assignedAt'
  };

  export type ApplicationWorkflowScalarFieldEnum = (typeof ApplicationWorkflowScalarFieldEnum)[keyof typeof ApplicationWorkflowScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    applications?: ApplicationListRelationFilter
    applicationHistories?: ApplicationHistoryListRelationFilter
    workflows?: ApplicationWorkflowListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applications?: ApplicationOrderByRelationAggregateInput
    applicationHistories?: ApplicationHistoryOrderByRelationAggregateInput
    workflows?: ApplicationWorkflowOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    applications?: ApplicationListRelationFilter
    applicationHistories?: ApplicationHistoryListRelationFilter
    workflows?: ApplicationWorkflowListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: IntFilter<"Application"> | number
    applicationNumber?: StringFilter<"Application"> | string
    applicantId?: IntFilter<"Application"> | number
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    applicationDate?: DateTimeFilter<"Application"> | Date | string
    applicationType?: StringFilter<"Application"> | string
    izinStartDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    izinEndDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    ytbScholarshipStatus?: StringNullableFilter<"Application"> | string | null
    foreignReferenceNumber?: StringNullableFilter<"Application"> | string | null
    foreignIdentityNumber?: StringFilter<"Application"> | string
    firstName?: StringFilter<"Application"> | string
    lastName?: StringFilter<"Application"> | string
    fatherName?: StringNullableFilter<"Application"> | string | null
    motherName?: StringNullableFilter<"Application"> | string | null
    gender?: StringNullableFilter<"Application"> | string | null
    placeOfBirth?: StringNullableFilter<"Application"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Application"> | Date | string | null
    maritalStatus?: StringNullableFilter<"Application"> | string | null
    nationality?: StringNullableFilter<"Application"> | string | null
    passportType?: StringNullableFilter<"Application"> | string | null
    passportNumber?: StringNullableFilter<"Application"> | string | null
    passportExpiryDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    passportRemainingPeriod?: StringNullableFilter<"Application"> | string | null
    residenceAddress?: StringNullableFilter<"Application"> | string | null
    email?: StringFilter<"Application"> | string
    phoneNumber?: StringFilter<"Application"> | string
    motherLanguage?: StringNullableFilter<"Application"> | string | null
    turkishLevel?: StringNullableFilter<"Application"> | string | null
    knownLanguages?: StringNullableFilter<"Application"> | string | null
    educationLevel?: StringNullableFilter<"Application"> | string | null
    specializationField?: StringNullableFilter<"Application"> | string | null
    graduatedSchoolName?: StringNullableFilter<"Application"> | string | null
    diplomaProfession?: StringNullableFilter<"Application"> | string | null
    jobTitle?: StringNullableFilter<"Application"> | string | null
    jobDescription?: StringNullableFilter<"Application"> | string | null
    employmentReason?: StringNullableFilter<"Application"> | string | null
    employmentType?: StringNullableFilter<"Application"> | string | null
    employmentDuration?: StringNullableFilter<"Application"> | string | null
    permitType?: StringNullableFilter<"Application"> | string | null
    grossSalary?: StringNullableFilter<"Application"> | string | null
    isCompanyPartner?: BoolFilter<"Application"> | boolean
    isPremiumAbroad?: BoolNullableFilter<"Application"> | boolean | null
    isHomeServiceJob?: BoolNullableFilter<"Application"> | boolean | null
    isTechRequired?: BoolNullableFilter<"Application"> | boolean | null
    isTubitakEmployee?: BoolNullableFilter<"Application"> | boolean | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: XOR<ApplicationDocumentsNullableScalarRelationFilter, ApplicationDocumentsWhereInput> | null
    employerInfo?: XOR<EmployerInfoNullableScalarRelationFilter, EmployerInfoWhereInput> | null
    histories?: ApplicationHistoryListRelationFilter
    workflow?: XOR<ApplicationWorkflowNullableScalarRelationFilter, ApplicationWorkflowWhereInput> | null
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    applicationNumber?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    applicationDate?: SortOrder
    applicationType?: SortOrder
    izinStartDate?: SortOrderInput | SortOrder
    izinEndDate?: SortOrderInput | SortOrder
    ytbScholarshipStatus?: SortOrderInput | SortOrder
    foreignReferenceNumber?: SortOrderInput | SortOrder
    foreignIdentityNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fatherName?: SortOrderInput | SortOrder
    motherName?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    placeOfBirth?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    passportType?: SortOrderInput | SortOrder
    passportNumber?: SortOrderInput | SortOrder
    passportExpiryDate?: SortOrderInput | SortOrder
    passportRemainingPeriod?: SortOrderInput | SortOrder
    residenceAddress?: SortOrderInput | SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    motherLanguage?: SortOrderInput | SortOrder
    turkishLevel?: SortOrderInput | SortOrder
    knownLanguages?: SortOrderInput | SortOrder
    educationLevel?: SortOrderInput | SortOrder
    specializationField?: SortOrderInput | SortOrder
    graduatedSchoolName?: SortOrderInput | SortOrder
    diplomaProfession?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    jobDescription?: SortOrderInput | SortOrder
    employmentReason?: SortOrderInput | SortOrder
    employmentType?: SortOrderInput | SortOrder
    employmentDuration?: SortOrderInput | SortOrder
    permitType?: SortOrderInput | SortOrder
    grossSalary?: SortOrderInput | SortOrder
    isCompanyPartner?: SortOrder
    isPremiumAbroad?: SortOrderInput | SortOrder
    isHomeServiceJob?: SortOrderInput | SortOrder
    isTechRequired?: SortOrderInput | SortOrder
    isTubitakEmployee?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicant?: UserOrderByWithRelationInput
    documents?: ApplicationDocumentsOrderByWithRelationInput
    employerInfo?: EmployerInfoOrderByWithRelationInput
    histories?: ApplicationHistoryOrderByRelationAggregateInput
    workflow?: ApplicationWorkflowOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    applicationNumber?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    applicantId?: IntFilter<"Application"> | number
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    applicationDate?: DateTimeFilter<"Application"> | Date | string
    applicationType?: StringFilter<"Application"> | string
    izinStartDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    izinEndDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    ytbScholarshipStatus?: StringNullableFilter<"Application"> | string | null
    foreignReferenceNumber?: StringNullableFilter<"Application"> | string | null
    foreignIdentityNumber?: StringFilter<"Application"> | string
    firstName?: StringFilter<"Application"> | string
    lastName?: StringFilter<"Application"> | string
    fatherName?: StringNullableFilter<"Application"> | string | null
    motherName?: StringNullableFilter<"Application"> | string | null
    gender?: StringNullableFilter<"Application"> | string | null
    placeOfBirth?: StringNullableFilter<"Application"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Application"> | Date | string | null
    maritalStatus?: StringNullableFilter<"Application"> | string | null
    nationality?: StringNullableFilter<"Application"> | string | null
    passportType?: StringNullableFilter<"Application"> | string | null
    passportNumber?: StringNullableFilter<"Application"> | string | null
    passportExpiryDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    passportRemainingPeriod?: StringNullableFilter<"Application"> | string | null
    residenceAddress?: StringNullableFilter<"Application"> | string | null
    email?: StringFilter<"Application"> | string
    phoneNumber?: StringFilter<"Application"> | string
    motherLanguage?: StringNullableFilter<"Application"> | string | null
    turkishLevel?: StringNullableFilter<"Application"> | string | null
    knownLanguages?: StringNullableFilter<"Application"> | string | null
    educationLevel?: StringNullableFilter<"Application"> | string | null
    specializationField?: StringNullableFilter<"Application"> | string | null
    graduatedSchoolName?: StringNullableFilter<"Application"> | string | null
    diplomaProfession?: StringNullableFilter<"Application"> | string | null
    jobTitle?: StringNullableFilter<"Application"> | string | null
    jobDescription?: StringNullableFilter<"Application"> | string | null
    employmentReason?: StringNullableFilter<"Application"> | string | null
    employmentType?: StringNullableFilter<"Application"> | string | null
    employmentDuration?: StringNullableFilter<"Application"> | string | null
    permitType?: StringNullableFilter<"Application"> | string | null
    grossSalary?: StringNullableFilter<"Application"> | string | null
    isCompanyPartner?: BoolFilter<"Application"> | boolean
    isPremiumAbroad?: BoolNullableFilter<"Application"> | boolean | null
    isHomeServiceJob?: BoolNullableFilter<"Application"> | boolean | null
    isTechRequired?: BoolNullableFilter<"Application"> | boolean | null
    isTubitakEmployee?: BoolNullableFilter<"Application"> | boolean | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: XOR<ApplicationDocumentsNullableScalarRelationFilter, ApplicationDocumentsWhereInput> | null
    employerInfo?: XOR<EmployerInfoNullableScalarRelationFilter, EmployerInfoWhereInput> | null
    histories?: ApplicationHistoryListRelationFilter
    workflow?: XOR<ApplicationWorkflowNullableScalarRelationFilter, ApplicationWorkflowWhereInput> | null
  }, "id" | "applicationNumber">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    applicationNumber?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    applicationDate?: SortOrder
    applicationType?: SortOrder
    izinStartDate?: SortOrderInput | SortOrder
    izinEndDate?: SortOrderInput | SortOrder
    ytbScholarshipStatus?: SortOrderInput | SortOrder
    foreignReferenceNumber?: SortOrderInput | SortOrder
    foreignIdentityNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fatherName?: SortOrderInput | SortOrder
    motherName?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    placeOfBirth?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    passportType?: SortOrderInput | SortOrder
    passportNumber?: SortOrderInput | SortOrder
    passportExpiryDate?: SortOrderInput | SortOrder
    passportRemainingPeriod?: SortOrderInput | SortOrder
    residenceAddress?: SortOrderInput | SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    motherLanguage?: SortOrderInput | SortOrder
    turkishLevel?: SortOrderInput | SortOrder
    knownLanguages?: SortOrderInput | SortOrder
    educationLevel?: SortOrderInput | SortOrder
    specializationField?: SortOrderInput | SortOrder
    graduatedSchoolName?: SortOrderInput | SortOrder
    diplomaProfession?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    jobDescription?: SortOrderInput | SortOrder
    employmentReason?: SortOrderInput | SortOrder
    employmentType?: SortOrderInput | SortOrder
    employmentDuration?: SortOrderInput | SortOrder
    permitType?: SortOrderInput | SortOrder
    grossSalary?: SortOrderInput | SortOrder
    isCompanyPartner?: SortOrder
    isPremiumAbroad?: SortOrderInput | SortOrder
    isHomeServiceJob?: SortOrderInput | SortOrder
    isTechRequired?: SortOrderInput | SortOrder
    isTubitakEmployee?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Application"> | number
    applicationNumber?: StringWithAggregatesFilter<"Application"> | string
    applicantId?: IntWithAggregatesFilter<"Application"> | number
    status?: EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus
    applicationDate?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    applicationType?: StringWithAggregatesFilter<"Application"> | string
    izinStartDate?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
    izinEndDate?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
    ytbScholarshipStatus?: StringNullableWithAggregatesFilter<"Application"> | string | null
    foreignReferenceNumber?: StringNullableWithAggregatesFilter<"Application"> | string | null
    foreignIdentityNumber?: StringWithAggregatesFilter<"Application"> | string
    firstName?: StringWithAggregatesFilter<"Application"> | string
    lastName?: StringWithAggregatesFilter<"Application"> | string
    fatherName?: StringNullableWithAggregatesFilter<"Application"> | string | null
    motherName?: StringNullableWithAggregatesFilter<"Application"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Application"> | string | null
    placeOfBirth?: StringNullableWithAggregatesFilter<"Application"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
    maritalStatus?: StringNullableWithAggregatesFilter<"Application"> | string | null
    nationality?: StringNullableWithAggregatesFilter<"Application"> | string | null
    passportType?: StringNullableWithAggregatesFilter<"Application"> | string | null
    passportNumber?: StringNullableWithAggregatesFilter<"Application"> | string | null
    passportExpiryDate?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
    passportRemainingPeriod?: StringNullableWithAggregatesFilter<"Application"> | string | null
    residenceAddress?: StringNullableWithAggregatesFilter<"Application"> | string | null
    email?: StringWithAggregatesFilter<"Application"> | string
    phoneNumber?: StringWithAggregatesFilter<"Application"> | string
    motherLanguage?: StringNullableWithAggregatesFilter<"Application"> | string | null
    turkishLevel?: StringNullableWithAggregatesFilter<"Application"> | string | null
    knownLanguages?: StringNullableWithAggregatesFilter<"Application"> | string | null
    educationLevel?: StringNullableWithAggregatesFilter<"Application"> | string | null
    specializationField?: StringNullableWithAggregatesFilter<"Application"> | string | null
    graduatedSchoolName?: StringNullableWithAggregatesFilter<"Application"> | string | null
    diplomaProfession?: StringNullableWithAggregatesFilter<"Application"> | string | null
    jobTitle?: StringNullableWithAggregatesFilter<"Application"> | string | null
    jobDescription?: StringNullableWithAggregatesFilter<"Application"> | string | null
    employmentReason?: StringNullableWithAggregatesFilter<"Application"> | string | null
    employmentType?: StringNullableWithAggregatesFilter<"Application"> | string | null
    employmentDuration?: StringNullableWithAggregatesFilter<"Application"> | string | null
    permitType?: StringNullableWithAggregatesFilter<"Application"> | string | null
    grossSalary?: StringNullableWithAggregatesFilter<"Application"> | string | null
    isCompanyPartner?: BoolWithAggregatesFilter<"Application"> | boolean
    isPremiumAbroad?: BoolNullableWithAggregatesFilter<"Application"> | boolean | null
    isHomeServiceJob?: BoolNullableWithAggregatesFilter<"Application"> | boolean | null
    isTechRequired?: BoolNullableWithAggregatesFilter<"Application"> | boolean | null
    isTubitakEmployee?: BoolNullableWithAggregatesFilter<"Application"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type ApplicationDocumentsWhereInput = {
    AND?: ApplicationDocumentsWhereInput | ApplicationDocumentsWhereInput[]
    OR?: ApplicationDocumentsWhereInput[]
    NOT?: ApplicationDocumentsWhereInput | ApplicationDocumentsWhereInput[]
    id?: IntFilter<"ApplicationDocuments"> | number
    applicationId?: IntFilter<"ApplicationDocuments"> | number
    applicationPetition?: StringNullableFilter<"ApplicationDocuments"> | string | null
    passport?: StringNullableFilter<"ApplicationDocuments"> | string | null
    employmentContract?: StringNullableFilter<"ApplicationDocuments"> | string | null
    diploma?: StringNullableFilter<"ApplicationDocuments"> | string | null
    additionalDocument?: StringNullableFilter<"ApplicationDocuments"> | string | null
    employmentNotification?: StringNullableFilter<"ApplicationDocuments"> | string | null
    permitTerminationPetition?: StringNullableFilter<"ApplicationDocuments"> | string | null
    activityCertificate?: StringNullableFilter<"ApplicationDocuments"> | string | null
    tradeRegistryGazette?: StringNullableFilter<"ApplicationDocuments"> | string | null
    balanceSheet?: StringNullableFilter<"ApplicationDocuments"> | string | null
    tourismLicense?: StringNullableFilter<"ApplicationDocuments"> | string | null
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }

  export type ApplicationDocumentsOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    applicationPetition?: SortOrderInput | SortOrder
    passport?: SortOrderInput | SortOrder
    employmentContract?: SortOrderInput | SortOrder
    diploma?: SortOrderInput | SortOrder
    additionalDocument?: SortOrderInput | SortOrder
    employmentNotification?: SortOrderInput | SortOrder
    permitTerminationPetition?: SortOrderInput | SortOrder
    activityCertificate?: SortOrderInput | SortOrder
    tradeRegistryGazette?: SortOrderInput | SortOrder
    balanceSheet?: SortOrderInput | SortOrder
    tourismLicense?: SortOrderInput | SortOrder
    application?: ApplicationOrderByWithRelationInput
  }

  export type ApplicationDocumentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    applicationId?: number
    AND?: ApplicationDocumentsWhereInput | ApplicationDocumentsWhereInput[]
    OR?: ApplicationDocumentsWhereInput[]
    NOT?: ApplicationDocumentsWhereInput | ApplicationDocumentsWhereInput[]
    applicationPetition?: StringNullableFilter<"ApplicationDocuments"> | string | null
    passport?: StringNullableFilter<"ApplicationDocuments"> | string | null
    employmentContract?: StringNullableFilter<"ApplicationDocuments"> | string | null
    diploma?: StringNullableFilter<"ApplicationDocuments"> | string | null
    additionalDocument?: StringNullableFilter<"ApplicationDocuments"> | string | null
    employmentNotification?: StringNullableFilter<"ApplicationDocuments"> | string | null
    permitTerminationPetition?: StringNullableFilter<"ApplicationDocuments"> | string | null
    activityCertificate?: StringNullableFilter<"ApplicationDocuments"> | string | null
    tradeRegistryGazette?: StringNullableFilter<"ApplicationDocuments"> | string | null
    balanceSheet?: StringNullableFilter<"ApplicationDocuments"> | string | null
    tourismLicense?: StringNullableFilter<"ApplicationDocuments"> | string | null
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }, "id" | "applicationId">

  export type ApplicationDocumentsOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    applicationPetition?: SortOrderInput | SortOrder
    passport?: SortOrderInput | SortOrder
    employmentContract?: SortOrderInput | SortOrder
    diploma?: SortOrderInput | SortOrder
    additionalDocument?: SortOrderInput | SortOrder
    employmentNotification?: SortOrderInput | SortOrder
    permitTerminationPetition?: SortOrderInput | SortOrder
    activityCertificate?: SortOrderInput | SortOrder
    tradeRegistryGazette?: SortOrderInput | SortOrder
    balanceSheet?: SortOrderInput | SortOrder
    tourismLicense?: SortOrderInput | SortOrder
    _count?: ApplicationDocumentsCountOrderByAggregateInput
    _avg?: ApplicationDocumentsAvgOrderByAggregateInput
    _max?: ApplicationDocumentsMaxOrderByAggregateInput
    _min?: ApplicationDocumentsMinOrderByAggregateInput
    _sum?: ApplicationDocumentsSumOrderByAggregateInput
  }

  export type ApplicationDocumentsScalarWhereWithAggregatesInput = {
    AND?: ApplicationDocumentsScalarWhereWithAggregatesInput | ApplicationDocumentsScalarWhereWithAggregatesInput[]
    OR?: ApplicationDocumentsScalarWhereWithAggregatesInput[]
    NOT?: ApplicationDocumentsScalarWhereWithAggregatesInput | ApplicationDocumentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApplicationDocuments"> | number
    applicationId?: IntWithAggregatesFilter<"ApplicationDocuments"> | number
    applicationPetition?: StringNullableWithAggregatesFilter<"ApplicationDocuments"> | string | null
    passport?: StringNullableWithAggregatesFilter<"ApplicationDocuments"> | string | null
    employmentContract?: StringNullableWithAggregatesFilter<"ApplicationDocuments"> | string | null
    diploma?: StringNullableWithAggregatesFilter<"ApplicationDocuments"> | string | null
    additionalDocument?: StringNullableWithAggregatesFilter<"ApplicationDocuments"> | string | null
    employmentNotification?: StringNullableWithAggregatesFilter<"ApplicationDocuments"> | string | null
    permitTerminationPetition?: StringNullableWithAggregatesFilter<"ApplicationDocuments"> | string | null
    activityCertificate?: StringNullableWithAggregatesFilter<"ApplicationDocuments"> | string | null
    tradeRegistryGazette?: StringNullableWithAggregatesFilter<"ApplicationDocuments"> | string | null
    balanceSheet?: StringNullableWithAggregatesFilter<"ApplicationDocuments"> | string | null
    tourismLicense?: StringNullableWithAggregatesFilter<"ApplicationDocuments"> | string | null
  }

  export type EmployerInfoWhereInput = {
    AND?: EmployerInfoWhereInput | EmployerInfoWhereInput[]
    OR?: EmployerInfoWhereInput[]
    NOT?: EmployerInfoWhereInput | EmployerInfoWhereInput[]
    id?: IntFilter<"EmployerInfo"> | number
    applicationId?: IntFilter<"EmployerInfo"> | number
    registrationNumber?: StringNullableFilter<"EmployerInfo"> | string | null
    companyType?: StringNullableFilter<"EmployerInfo"> | string | null
    naceCode?: StringNullableFilter<"EmployerInfo"> | string | null
    workplaceTitle?: StringNullableFilter<"EmployerInfo"> | string | null
    phoneNumber?: StringNullableFilter<"EmployerInfo"> | string | null
    ebildirgeName?: StringNullableFilter<"EmployerInfo"> | string | null
    responsibleName?: StringNullableFilter<"EmployerInfo"> | string | null
    currentEmail?: StringNullableFilter<"EmployerInfo"> | string | null
    applicationEmail?: StringNullableFilter<"EmployerInfo"> | string | null
    establishmentDate?: DateTimeNullableFilter<"EmployerInfo"> | Date | string | null
    mersisNumber?: StringNullableFilter<"EmployerInfo"> | string | null
    taxOffice?: StringNullableFilter<"EmployerInfo"> | string | null
    taxNumber?: StringNullableFilter<"EmployerInfo"> | string | null
    workplaceAddress?: StringNullableFilter<"EmployerInfo"> | string | null
    workAddress?: StringNullableFilter<"EmployerInfo"> | string | null
    capitalStructure?: StringNullableFilter<"EmployerInfo"> | string | null
    registeredCapitalTRY?: StringNullableFilter<"EmployerInfo"> | string | null
    paidCapitalTRY?: StringNullableFilter<"EmployerInfo"> | string | null
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }

  export type EmployerInfoOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    registrationNumber?: SortOrderInput | SortOrder
    companyType?: SortOrderInput | SortOrder
    naceCode?: SortOrderInput | SortOrder
    workplaceTitle?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    ebildirgeName?: SortOrderInput | SortOrder
    responsibleName?: SortOrderInput | SortOrder
    currentEmail?: SortOrderInput | SortOrder
    applicationEmail?: SortOrderInput | SortOrder
    establishmentDate?: SortOrderInput | SortOrder
    mersisNumber?: SortOrderInput | SortOrder
    taxOffice?: SortOrderInput | SortOrder
    taxNumber?: SortOrderInput | SortOrder
    workplaceAddress?: SortOrderInput | SortOrder
    workAddress?: SortOrderInput | SortOrder
    capitalStructure?: SortOrderInput | SortOrder
    registeredCapitalTRY?: SortOrderInput | SortOrder
    paidCapitalTRY?: SortOrderInput | SortOrder
    application?: ApplicationOrderByWithRelationInput
  }

  export type EmployerInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    applicationId?: number
    AND?: EmployerInfoWhereInput | EmployerInfoWhereInput[]
    OR?: EmployerInfoWhereInput[]
    NOT?: EmployerInfoWhereInput | EmployerInfoWhereInput[]
    registrationNumber?: StringNullableFilter<"EmployerInfo"> | string | null
    companyType?: StringNullableFilter<"EmployerInfo"> | string | null
    naceCode?: StringNullableFilter<"EmployerInfo"> | string | null
    workplaceTitle?: StringNullableFilter<"EmployerInfo"> | string | null
    phoneNumber?: StringNullableFilter<"EmployerInfo"> | string | null
    ebildirgeName?: StringNullableFilter<"EmployerInfo"> | string | null
    responsibleName?: StringNullableFilter<"EmployerInfo"> | string | null
    currentEmail?: StringNullableFilter<"EmployerInfo"> | string | null
    applicationEmail?: StringNullableFilter<"EmployerInfo"> | string | null
    establishmentDate?: DateTimeNullableFilter<"EmployerInfo"> | Date | string | null
    mersisNumber?: StringNullableFilter<"EmployerInfo"> | string | null
    taxOffice?: StringNullableFilter<"EmployerInfo"> | string | null
    taxNumber?: StringNullableFilter<"EmployerInfo"> | string | null
    workplaceAddress?: StringNullableFilter<"EmployerInfo"> | string | null
    workAddress?: StringNullableFilter<"EmployerInfo"> | string | null
    capitalStructure?: StringNullableFilter<"EmployerInfo"> | string | null
    registeredCapitalTRY?: StringNullableFilter<"EmployerInfo"> | string | null
    paidCapitalTRY?: StringNullableFilter<"EmployerInfo"> | string | null
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }, "id" | "applicationId">

  export type EmployerInfoOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    registrationNumber?: SortOrderInput | SortOrder
    companyType?: SortOrderInput | SortOrder
    naceCode?: SortOrderInput | SortOrder
    workplaceTitle?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    ebildirgeName?: SortOrderInput | SortOrder
    responsibleName?: SortOrderInput | SortOrder
    currentEmail?: SortOrderInput | SortOrder
    applicationEmail?: SortOrderInput | SortOrder
    establishmentDate?: SortOrderInput | SortOrder
    mersisNumber?: SortOrderInput | SortOrder
    taxOffice?: SortOrderInput | SortOrder
    taxNumber?: SortOrderInput | SortOrder
    workplaceAddress?: SortOrderInput | SortOrder
    workAddress?: SortOrderInput | SortOrder
    capitalStructure?: SortOrderInput | SortOrder
    registeredCapitalTRY?: SortOrderInput | SortOrder
    paidCapitalTRY?: SortOrderInput | SortOrder
    _count?: EmployerInfoCountOrderByAggregateInput
    _avg?: EmployerInfoAvgOrderByAggregateInput
    _max?: EmployerInfoMaxOrderByAggregateInput
    _min?: EmployerInfoMinOrderByAggregateInput
    _sum?: EmployerInfoSumOrderByAggregateInput
  }

  export type EmployerInfoScalarWhereWithAggregatesInput = {
    AND?: EmployerInfoScalarWhereWithAggregatesInput | EmployerInfoScalarWhereWithAggregatesInput[]
    OR?: EmployerInfoScalarWhereWithAggregatesInput[]
    NOT?: EmployerInfoScalarWhereWithAggregatesInput | EmployerInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmployerInfo"> | number
    applicationId?: IntWithAggregatesFilter<"EmployerInfo"> | number
    registrationNumber?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    companyType?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    naceCode?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    workplaceTitle?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    ebildirgeName?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    responsibleName?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    currentEmail?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    applicationEmail?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    establishmentDate?: DateTimeNullableWithAggregatesFilter<"EmployerInfo"> | Date | string | null
    mersisNumber?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    taxOffice?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    taxNumber?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    workplaceAddress?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    workAddress?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    capitalStructure?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    registeredCapitalTRY?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
    paidCapitalTRY?: StringNullableWithAggregatesFilter<"EmployerInfo"> | string | null
  }

  export type ApplicationHistoryWhereInput = {
    AND?: ApplicationHistoryWhereInput | ApplicationHistoryWhereInput[]
    OR?: ApplicationHistoryWhereInput[]
    NOT?: ApplicationHistoryWhereInput | ApplicationHistoryWhereInput[]
    id?: IntFilter<"ApplicationHistory"> | number
    applicationId?: IntFilter<"ApplicationHistory"> | number
    userId?: IntFilter<"ApplicationHistory"> | number
    action?: StringFilter<"ApplicationHistory"> | string
    comment?: StringNullableFilter<"ApplicationHistory"> | string | null
    createdAt?: DateTimeFilter<"ApplicationHistory"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApplicationHistoryOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    application?: ApplicationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ApplicationHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApplicationHistoryWhereInput | ApplicationHistoryWhereInput[]
    OR?: ApplicationHistoryWhereInput[]
    NOT?: ApplicationHistoryWhereInput | ApplicationHistoryWhereInput[]
    applicationId?: IntFilter<"ApplicationHistory"> | number
    userId?: IntFilter<"ApplicationHistory"> | number
    action?: StringFilter<"ApplicationHistory"> | string
    comment?: StringNullableFilter<"ApplicationHistory"> | string | null
    createdAt?: DateTimeFilter<"ApplicationHistory"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ApplicationHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApplicationHistoryCountOrderByAggregateInput
    _avg?: ApplicationHistoryAvgOrderByAggregateInput
    _max?: ApplicationHistoryMaxOrderByAggregateInput
    _min?: ApplicationHistoryMinOrderByAggregateInput
    _sum?: ApplicationHistorySumOrderByAggregateInput
  }

  export type ApplicationHistoryScalarWhereWithAggregatesInput = {
    AND?: ApplicationHistoryScalarWhereWithAggregatesInput | ApplicationHistoryScalarWhereWithAggregatesInput[]
    OR?: ApplicationHistoryScalarWhereWithAggregatesInput[]
    NOT?: ApplicationHistoryScalarWhereWithAggregatesInput | ApplicationHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApplicationHistory"> | number
    applicationId?: IntWithAggregatesFilter<"ApplicationHistory"> | number
    userId?: IntWithAggregatesFilter<"ApplicationHistory"> | number
    action?: StringWithAggregatesFilter<"ApplicationHistory"> | string
    comment?: StringNullableWithAggregatesFilter<"ApplicationHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApplicationHistory"> | Date | string
  }

  export type ApplicationWorkflowWhereInput = {
    AND?: ApplicationWorkflowWhereInput | ApplicationWorkflowWhereInput[]
    OR?: ApplicationWorkflowWhereInput[]
    NOT?: ApplicationWorkflowWhereInput | ApplicationWorkflowWhereInput[]
    id?: IntFilter<"ApplicationWorkflow"> | number
    applicationId?: IntFilter<"ApplicationWorkflow"> | number
    currentUserId?: IntFilter<"ApplicationWorkflow"> | number
    assignedAt?: DateTimeFilter<"ApplicationWorkflow"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    currentUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApplicationWorkflowOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    currentUserId?: SortOrder
    assignedAt?: SortOrder
    application?: ApplicationOrderByWithRelationInput
    currentUser?: UserOrderByWithRelationInput
  }

  export type ApplicationWorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    applicationId?: number
    AND?: ApplicationWorkflowWhereInput | ApplicationWorkflowWhereInput[]
    OR?: ApplicationWorkflowWhereInput[]
    NOT?: ApplicationWorkflowWhereInput | ApplicationWorkflowWhereInput[]
    currentUserId?: IntFilter<"ApplicationWorkflow"> | number
    assignedAt?: DateTimeFilter<"ApplicationWorkflow"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    currentUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "applicationId">

  export type ApplicationWorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    currentUserId?: SortOrder
    assignedAt?: SortOrder
    _count?: ApplicationWorkflowCountOrderByAggregateInput
    _avg?: ApplicationWorkflowAvgOrderByAggregateInput
    _max?: ApplicationWorkflowMaxOrderByAggregateInput
    _min?: ApplicationWorkflowMinOrderByAggregateInput
    _sum?: ApplicationWorkflowSumOrderByAggregateInput
  }

  export type ApplicationWorkflowScalarWhereWithAggregatesInput = {
    AND?: ApplicationWorkflowScalarWhereWithAggregatesInput | ApplicationWorkflowScalarWhereWithAggregatesInput[]
    OR?: ApplicationWorkflowScalarWhereWithAggregatesInput[]
    NOT?: ApplicationWorkflowScalarWhereWithAggregatesInput | ApplicationWorkflowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApplicationWorkflow"> | number
    applicationId?: IntWithAggregatesFilter<"ApplicationWorkflow"> | number
    currentUserId?: IntWithAggregatesFilter<"ApplicationWorkflow"> | number
    assignedAt?: DateTimeWithAggregatesFilter<"ApplicationWorkflow"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    applicationHistories?: ApplicationHistoryCreateNestedManyWithoutUserInput
    workflows?: ApplicationWorkflowCreateNestedManyWithoutCurrentUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    applicationHistories?: ApplicationHistoryUncheckedCreateNestedManyWithoutUserInput
    workflows?: ApplicationWorkflowUncheckedCreateNestedManyWithoutCurrentUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    applicationHistories?: ApplicationHistoryUpdateManyWithoutUserNestedInput
    workflows?: ApplicationWorkflowUpdateManyWithoutCurrentUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    applicationHistories?: ApplicationHistoryUncheckedUpdateManyWithoutUserNestedInput
    workflows?: ApplicationWorkflowUncheckedUpdateManyWithoutCurrentUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    applicationNumber: string
    status?: $Enums.ApplicationStatus
    applicationDate: Date | string
    applicationType: string
    izinStartDate?: Date | string | null
    izinEndDate?: Date | string | null
    ytbScholarshipStatus?: string | null
    foreignReferenceNumber?: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName?: string | null
    motherName?: string | null
    gender?: string | null
    placeOfBirth?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    nationality?: string | null
    passportType?: string | null
    passportNumber?: string | null
    passportExpiryDate?: Date | string | null
    passportRemainingPeriod?: string | null
    residenceAddress?: string | null
    email: string
    phoneNumber: string
    motherLanguage?: string | null
    turkishLevel?: string | null
    knownLanguages?: string | null
    educationLevel?: string | null
    specializationField?: string | null
    graduatedSchoolName?: string | null
    diplomaProfession?: string | null
    jobTitle?: string | null
    jobDescription?: string | null
    employmentReason?: string | null
    employmentType?: string | null
    employmentDuration?: string | null
    permitType?: string | null
    grossSalary?: string | null
    isCompanyPartner: boolean
    isPremiumAbroad?: boolean | null
    isHomeServiceJob?: boolean | null
    isTechRequired?: boolean | null
    isTubitakEmployee?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutApplicationsInput
    documents?: ApplicationDocumentsCreateNestedOneWithoutApplicationInput
    employerInfo?: EmployerInfoCreateNestedOneWithoutApplicationInput
    histories?: ApplicationHistoryCreateNestedManyWithoutApplicationInput
    workflow?: ApplicationWorkflowCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: number
    applicationNumber: string
    applicantId: number
    status?: $Enums.ApplicationStatus
    applicationDate: Date | string
    applicationType: string
    izinStartDate?: Date | string | null
    izinEndDate?: Date | string | null
    ytbScholarshipStatus?: string | null
    foreignReferenceNumber?: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName?: string | null
    motherName?: string | null
    gender?: string | null
    placeOfBirth?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    nationality?: string | null
    passportType?: string | null
    passportNumber?: string | null
    passportExpiryDate?: Date | string | null
    passportRemainingPeriod?: string | null
    residenceAddress?: string | null
    email: string
    phoneNumber: string
    motherLanguage?: string | null
    turkishLevel?: string | null
    knownLanguages?: string | null
    educationLevel?: string | null
    specializationField?: string | null
    graduatedSchoolName?: string | null
    diplomaProfession?: string | null
    jobTitle?: string | null
    jobDescription?: string | null
    employmentReason?: string | null
    employmentType?: string | null
    employmentDuration?: string | null
    permitType?: string | null
    grossSalary?: string | null
    isCompanyPartner: boolean
    isPremiumAbroad?: boolean | null
    isHomeServiceJob?: boolean | null
    isTechRequired?: boolean | null
    isTubitakEmployee?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: ApplicationDocumentsUncheckedCreateNestedOneWithoutApplicationInput
    employerInfo?: EmployerInfoUncheckedCreateNestedOneWithoutApplicationInput
    histories?: ApplicationHistoryUncheckedCreateNestedManyWithoutApplicationInput
    workflow?: ApplicationWorkflowUncheckedCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    applicationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: ApplicationDocumentsUpdateOneWithoutApplicationNestedInput
    employerInfo?: EmployerInfoUpdateOneWithoutApplicationNestedInput
    histories?: ApplicationHistoryUpdateManyWithoutApplicationNestedInput
    workflow?: ApplicationWorkflowUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ApplicationDocumentsUncheckedUpdateOneWithoutApplicationNestedInput
    employerInfo?: EmployerInfoUncheckedUpdateOneWithoutApplicationNestedInput
    histories?: ApplicationHistoryUncheckedUpdateManyWithoutApplicationNestedInput
    workflow?: ApplicationWorkflowUncheckedUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: number
    applicationNumber: string
    applicantId: number
    status?: $Enums.ApplicationStatus
    applicationDate: Date | string
    applicationType: string
    izinStartDate?: Date | string | null
    izinEndDate?: Date | string | null
    ytbScholarshipStatus?: string | null
    foreignReferenceNumber?: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName?: string | null
    motherName?: string | null
    gender?: string | null
    placeOfBirth?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    nationality?: string | null
    passportType?: string | null
    passportNumber?: string | null
    passportExpiryDate?: Date | string | null
    passportRemainingPeriod?: string | null
    residenceAddress?: string | null
    email: string
    phoneNumber: string
    motherLanguage?: string | null
    turkishLevel?: string | null
    knownLanguages?: string | null
    educationLevel?: string | null
    specializationField?: string | null
    graduatedSchoolName?: string | null
    diplomaProfession?: string | null
    jobTitle?: string | null
    jobDescription?: string | null
    employmentReason?: string | null
    employmentType?: string | null
    employmentDuration?: string | null
    permitType?: string | null
    grossSalary?: string | null
    isCompanyPartner: boolean
    isPremiumAbroad?: boolean | null
    isHomeServiceJob?: boolean | null
    isTechRequired?: boolean | null
    isTubitakEmployee?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    applicationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentsCreateInput = {
    applicationPetition?: string | null
    passport?: string | null
    employmentContract?: string | null
    diploma?: string | null
    additionalDocument?: string | null
    employmentNotification?: string | null
    permitTerminationPetition?: string | null
    activityCertificate?: string | null
    tradeRegistryGazette?: string | null
    balanceSheet?: string | null
    tourismLicense?: string | null
    application: ApplicationCreateNestedOneWithoutDocumentsInput
  }

  export type ApplicationDocumentsUncheckedCreateInput = {
    id?: number
    applicationId: number
    applicationPetition?: string | null
    passport?: string | null
    employmentContract?: string | null
    diploma?: string | null
    additionalDocument?: string | null
    employmentNotification?: string | null
    permitTerminationPetition?: string | null
    activityCertificate?: string | null
    tradeRegistryGazette?: string | null
    balanceSheet?: string | null
    tourismLicense?: string | null
  }

  export type ApplicationDocumentsUpdateInput = {
    applicationPetition?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    employmentContract?: NullableStringFieldUpdateOperationsInput | string | null
    diploma?: NullableStringFieldUpdateOperationsInput | string | null
    additionalDocument?: NullableStringFieldUpdateOperationsInput | string | null
    employmentNotification?: NullableStringFieldUpdateOperationsInput | string | null
    permitTerminationPetition?: NullableStringFieldUpdateOperationsInput | string | null
    activityCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tradeRegistryGazette?: NullableStringFieldUpdateOperationsInput | string | null
    balanceSheet?: NullableStringFieldUpdateOperationsInput | string | null
    tourismLicense?: NullableStringFieldUpdateOperationsInput | string | null
    application?: ApplicationUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type ApplicationDocumentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    applicationPetition?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    employmentContract?: NullableStringFieldUpdateOperationsInput | string | null
    diploma?: NullableStringFieldUpdateOperationsInput | string | null
    additionalDocument?: NullableStringFieldUpdateOperationsInput | string | null
    employmentNotification?: NullableStringFieldUpdateOperationsInput | string | null
    permitTerminationPetition?: NullableStringFieldUpdateOperationsInput | string | null
    activityCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tradeRegistryGazette?: NullableStringFieldUpdateOperationsInput | string | null
    balanceSheet?: NullableStringFieldUpdateOperationsInput | string | null
    tourismLicense?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationDocumentsCreateManyInput = {
    id?: number
    applicationId: number
    applicationPetition?: string | null
    passport?: string | null
    employmentContract?: string | null
    diploma?: string | null
    additionalDocument?: string | null
    employmentNotification?: string | null
    permitTerminationPetition?: string | null
    activityCertificate?: string | null
    tradeRegistryGazette?: string | null
    balanceSheet?: string | null
    tourismLicense?: string | null
  }

  export type ApplicationDocumentsUpdateManyMutationInput = {
    applicationPetition?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    employmentContract?: NullableStringFieldUpdateOperationsInput | string | null
    diploma?: NullableStringFieldUpdateOperationsInput | string | null
    additionalDocument?: NullableStringFieldUpdateOperationsInput | string | null
    employmentNotification?: NullableStringFieldUpdateOperationsInput | string | null
    permitTerminationPetition?: NullableStringFieldUpdateOperationsInput | string | null
    activityCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tradeRegistryGazette?: NullableStringFieldUpdateOperationsInput | string | null
    balanceSheet?: NullableStringFieldUpdateOperationsInput | string | null
    tourismLicense?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationDocumentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    applicationPetition?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    employmentContract?: NullableStringFieldUpdateOperationsInput | string | null
    diploma?: NullableStringFieldUpdateOperationsInput | string | null
    additionalDocument?: NullableStringFieldUpdateOperationsInput | string | null
    employmentNotification?: NullableStringFieldUpdateOperationsInput | string | null
    permitTerminationPetition?: NullableStringFieldUpdateOperationsInput | string | null
    activityCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tradeRegistryGazette?: NullableStringFieldUpdateOperationsInput | string | null
    balanceSheet?: NullableStringFieldUpdateOperationsInput | string | null
    tourismLicense?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployerInfoCreateInput = {
    registrationNumber?: string | null
    companyType?: string | null
    naceCode?: string | null
    workplaceTitle?: string | null
    phoneNumber?: string | null
    ebildirgeName?: string | null
    responsibleName?: string | null
    currentEmail?: string | null
    applicationEmail?: string | null
    establishmentDate?: Date | string | null
    mersisNumber?: string | null
    taxOffice?: string | null
    taxNumber?: string | null
    workplaceAddress?: string | null
    workAddress?: string | null
    capitalStructure?: string | null
    registeredCapitalTRY?: string | null
    paidCapitalTRY?: string | null
    application: ApplicationCreateNestedOneWithoutEmployerInfoInput
  }

  export type EmployerInfoUncheckedCreateInput = {
    id?: number
    applicationId: number
    registrationNumber?: string | null
    companyType?: string | null
    naceCode?: string | null
    workplaceTitle?: string | null
    phoneNumber?: string | null
    ebildirgeName?: string | null
    responsibleName?: string | null
    currentEmail?: string | null
    applicationEmail?: string | null
    establishmentDate?: Date | string | null
    mersisNumber?: string | null
    taxOffice?: string | null
    taxNumber?: string | null
    workplaceAddress?: string | null
    workAddress?: string | null
    capitalStructure?: string | null
    registeredCapitalTRY?: string | null
    paidCapitalTRY?: string | null
  }

  export type EmployerInfoUpdateInput = {
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyType?: NullableStringFieldUpdateOperationsInput | string | null
    naceCode?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceTitle?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ebildirgeName?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleName?: NullableStringFieldUpdateOperationsInput | string | null
    currentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    applicationEmail?: NullableStringFieldUpdateOperationsInput | string | null
    establishmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mersisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    taxOffice?: NullableStringFieldUpdateOperationsInput | string | null
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    workAddress?: NullableStringFieldUpdateOperationsInput | string | null
    capitalStructure?: NullableStringFieldUpdateOperationsInput | string | null
    registeredCapitalTRY?: NullableStringFieldUpdateOperationsInput | string | null
    paidCapitalTRY?: NullableStringFieldUpdateOperationsInput | string | null
    application?: ApplicationUpdateOneRequiredWithoutEmployerInfoNestedInput
  }

  export type EmployerInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyType?: NullableStringFieldUpdateOperationsInput | string | null
    naceCode?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceTitle?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ebildirgeName?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleName?: NullableStringFieldUpdateOperationsInput | string | null
    currentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    applicationEmail?: NullableStringFieldUpdateOperationsInput | string | null
    establishmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mersisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    taxOffice?: NullableStringFieldUpdateOperationsInput | string | null
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    workAddress?: NullableStringFieldUpdateOperationsInput | string | null
    capitalStructure?: NullableStringFieldUpdateOperationsInput | string | null
    registeredCapitalTRY?: NullableStringFieldUpdateOperationsInput | string | null
    paidCapitalTRY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployerInfoCreateManyInput = {
    id?: number
    applicationId: number
    registrationNumber?: string | null
    companyType?: string | null
    naceCode?: string | null
    workplaceTitle?: string | null
    phoneNumber?: string | null
    ebildirgeName?: string | null
    responsibleName?: string | null
    currentEmail?: string | null
    applicationEmail?: string | null
    establishmentDate?: Date | string | null
    mersisNumber?: string | null
    taxOffice?: string | null
    taxNumber?: string | null
    workplaceAddress?: string | null
    workAddress?: string | null
    capitalStructure?: string | null
    registeredCapitalTRY?: string | null
    paidCapitalTRY?: string | null
  }

  export type EmployerInfoUpdateManyMutationInput = {
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyType?: NullableStringFieldUpdateOperationsInput | string | null
    naceCode?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceTitle?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ebildirgeName?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleName?: NullableStringFieldUpdateOperationsInput | string | null
    currentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    applicationEmail?: NullableStringFieldUpdateOperationsInput | string | null
    establishmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mersisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    taxOffice?: NullableStringFieldUpdateOperationsInput | string | null
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    workAddress?: NullableStringFieldUpdateOperationsInput | string | null
    capitalStructure?: NullableStringFieldUpdateOperationsInput | string | null
    registeredCapitalTRY?: NullableStringFieldUpdateOperationsInput | string | null
    paidCapitalTRY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployerInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyType?: NullableStringFieldUpdateOperationsInput | string | null
    naceCode?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceTitle?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ebildirgeName?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleName?: NullableStringFieldUpdateOperationsInput | string | null
    currentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    applicationEmail?: NullableStringFieldUpdateOperationsInput | string | null
    establishmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mersisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    taxOffice?: NullableStringFieldUpdateOperationsInput | string | null
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    workAddress?: NullableStringFieldUpdateOperationsInput | string | null
    capitalStructure?: NullableStringFieldUpdateOperationsInput | string | null
    registeredCapitalTRY?: NullableStringFieldUpdateOperationsInput | string | null
    paidCapitalTRY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationHistoryCreateInput = {
    action: string
    comment?: string | null
    createdAt?: Date | string
    application: ApplicationCreateNestedOneWithoutHistoriesInput
    user: UserCreateNestedOneWithoutApplicationHistoriesInput
  }

  export type ApplicationHistoryUncheckedCreateInput = {
    id?: number
    applicationId: number
    userId: number
    action: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type ApplicationHistoryUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutHistoriesNestedInput
    user?: UserUpdateOneRequiredWithoutApplicationHistoriesNestedInput
  }

  export type ApplicationHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationHistoryCreateManyInput = {
    id?: number
    applicationId: number
    userId: number
    action: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type ApplicationHistoryUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationWorkflowCreateInput = {
    assignedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutWorkflowInput
    currentUser: UserCreateNestedOneWithoutWorkflowsInput
  }

  export type ApplicationWorkflowUncheckedCreateInput = {
    id?: number
    applicationId: number
    currentUserId: number
    assignedAt?: Date | string
  }

  export type ApplicationWorkflowUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutWorkflowNestedInput
    currentUser?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
  }

  export type ApplicationWorkflowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    currentUserId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationWorkflowCreateManyInput = {
    id?: number
    applicationId: number
    currentUserId: number
    assignedAt?: Date | string
  }

  export type ApplicationWorkflowUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationWorkflowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    currentUserId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type ApplicationHistoryListRelationFilter = {
    every?: ApplicationHistoryWhereInput
    some?: ApplicationHistoryWhereInput
    none?: ApplicationHistoryWhereInput
  }

  export type ApplicationWorkflowListRelationFilter = {
    every?: ApplicationWorkflowWhereInput
    some?: ApplicationWorkflowWhereInput
    none?: ApplicationWorkflowWhereInput
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationWorkflowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ApplicationDocumentsNullableScalarRelationFilter = {
    is?: ApplicationDocumentsWhereInput | null
    isNot?: ApplicationDocumentsWhereInput | null
  }

  export type EmployerInfoNullableScalarRelationFilter = {
    is?: EmployerInfoWhereInput | null
    isNot?: EmployerInfoWhereInput | null
  }

  export type ApplicationWorkflowNullableScalarRelationFilter = {
    is?: ApplicationWorkflowWhereInput | null
    isNot?: ApplicationWorkflowWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    applicationNumber?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    applicationDate?: SortOrder
    applicationType?: SortOrder
    izinStartDate?: SortOrder
    izinEndDate?: SortOrder
    ytbScholarshipStatus?: SortOrder
    foreignReferenceNumber?: SortOrder
    foreignIdentityNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    gender?: SortOrder
    placeOfBirth?: SortOrder
    dateOfBirth?: SortOrder
    maritalStatus?: SortOrder
    nationality?: SortOrder
    passportType?: SortOrder
    passportNumber?: SortOrder
    passportExpiryDate?: SortOrder
    passportRemainingPeriod?: SortOrder
    residenceAddress?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    motherLanguage?: SortOrder
    turkishLevel?: SortOrder
    knownLanguages?: SortOrder
    educationLevel?: SortOrder
    specializationField?: SortOrder
    graduatedSchoolName?: SortOrder
    diplomaProfession?: SortOrder
    jobTitle?: SortOrder
    jobDescription?: SortOrder
    employmentReason?: SortOrder
    employmentType?: SortOrder
    employmentDuration?: SortOrder
    permitType?: SortOrder
    grossSalary?: SortOrder
    isCompanyPartner?: SortOrder
    isPremiumAbroad?: SortOrder
    isHomeServiceJob?: SortOrder
    isTechRequired?: SortOrder
    isTubitakEmployee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationNumber?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    applicationDate?: SortOrder
    applicationType?: SortOrder
    izinStartDate?: SortOrder
    izinEndDate?: SortOrder
    ytbScholarshipStatus?: SortOrder
    foreignReferenceNumber?: SortOrder
    foreignIdentityNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    gender?: SortOrder
    placeOfBirth?: SortOrder
    dateOfBirth?: SortOrder
    maritalStatus?: SortOrder
    nationality?: SortOrder
    passportType?: SortOrder
    passportNumber?: SortOrder
    passportExpiryDate?: SortOrder
    passportRemainingPeriod?: SortOrder
    residenceAddress?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    motherLanguage?: SortOrder
    turkishLevel?: SortOrder
    knownLanguages?: SortOrder
    educationLevel?: SortOrder
    specializationField?: SortOrder
    graduatedSchoolName?: SortOrder
    diplomaProfession?: SortOrder
    jobTitle?: SortOrder
    jobDescription?: SortOrder
    employmentReason?: SortOrder
    employmentType?: SortOrder
    employmentDuration?: SortOrder
    permitType?: SortOrder
    grossSalary?: SortOrder
    isCompanyPartner?: SortOrder
    isPremiumAbroad?: SortOrder
    isHomeServiceJob?: SortOrder
    isTechRequired?: SortOrder
    isTubitakEmployee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    applicationNumber?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    applicationDate?: SortOrder
    applicationType?: SortOrder
    izinStartDate?: SortOrder
    izinEndDate?: SortOrder
    ytbScholarshipStatus?: SortOrder
    foreignReferenceNumber?: SortOrder
    foreignIdentityNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    gender?: SortOrder
    placeOfBirth?: SortOrder
    dateOfBirth?: SortOrder
    maritalStatus?: SortOrder
    nationality?: SortOrder
    passportType?: SortOrder
    passportNumber?: SortOrder
    passportExpiryDate?: SortOrder
    passportRemainingPeriod?: SortOrder
    residenceAddress?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    motherLanguage?: SortOrder
    turkishLevel?: SortOrder
    knownLanguages?: SortOrder
    educationLevel?: SortOrder
    specializationField?: SortOrder
    graduatedSchoolName?: SortOrder
    diplomaProfession?: SortOrder
    jobTitle?: SortOrder
    jobDescription?: SortOrder
    employmentReason?: SortOrder
    employmentType?: SortOrder
    employmentDuration?: SortOrder
    permitType?: SortOrder
    grossSalary?: SortOrder
    isCompanyPartner?: SortOrder
    isPremiumAbroad?: SortOrder
    isHomeServiceJob?: SortOrder
    isTechRequired?: SortOrder
    isTubitakEmployee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ApplicationScalarRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type ApplicationDocumentsCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    applicationPetition?: SortOrder
    passport?: SortOrder
    employmentContract?: SortOrder
    diploma?: SortOrder
    additionalDocument?: SortOrder
    employmentNotification?: SortOrder
    permitTerminationPetition?: SortOrder
    activityCertificate?: SortOrder
    tradeRegistryGazette?: SortOrder
    balanceSheet?: SortOrder
    tourismLicense?: SortOrder
  }

  export type ApplicationDocumentsAvgOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
  }

  export type ApplicationDocumentsMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    applicationPetition?: SortOrder
    passport?: SortOrder
    employmentContract?: SortOrder
    diploma?: SortOrder
    additionalDocument?: SortOrder
    employmentNotification?: SortOrder
    permitTerminationPetition?: SortOrder
    activityCertificate?: SortOrder
    tradeRegistryGazette?: SortOrder
    balanceSheet?: SortOrder
    tourismLicense?: SortOrder
  }

  export type ApplicationDocumentsMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    applicationPetition?: SortOrder
    passport?: SortOrder
    employmentContract?: SortOrder
    diploma?: SortOrder
    additionalDocument?: SortOrder
    employmentNotification?: SortOrder
    permitTerminationPetition?: SortOrder
    activityCertificate?: SortOrder
    tradeRegistryGazette?: SortOrder
    balanceSheet?: SortOrder
    tourismLicense?: SortOrder
  }

  export type ApplicationDocumentsSumOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
  }

  export type EmployerInfoCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    registrationNumber?: SortOrder
    companyType?: SortOrder
    naceCode?: SortOrder
    workplaceTitle?: SortOrder
    phoneNumber?: SortOrder
    ebildirgeName?: SortOrder
    responsibleName?: SortOrder
    currentEmail?: SortOrder
    applicationEmail?: SortOrder
    establishmentDate?: SortOrder
    mersisNumber?: SortOrder
    taxOffice?: SortOrder
    taxNumber?: SortOrder
    workplaceAddress?: SortOrder
    workAddress?: SortOrder
    capitalStructure?: SortOrder
    registeredCapitalTRY?: SortOrder
    paidCapitalTRY?: SortOrder
  }

  export type EmployerInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
  }

  export type EmployerInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    registrationNumber?: SortOrder
    companyType?: SortOrder
    naceCode?: SortOrder
    workplaceTitle?: SortOrder
    phoneNumber?: SortOrder
    ebildirgeName?: SortOrder
    responsibleName?: SortOrder
    currentEmail?: SortOrder
    applicationEmail?: SortOrder
    establishmentDate?: SortOrder
    mersisNumber?: SortOrder
    taxOffice?: SortOrder
    taxNumber?: SortOrder
    workplaceAddress?: SortOrder
    workAddress?: SortOrder
    capitalStructure?: SortOrder
    registeredCapitalTRY?: SortOrder
    paidCapitalTRY?: SortOrder
  }

  export type EmployerInfoMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    registrationNumber?: SortOrder
    companyType?: SortOrder
    naceCode?: SortOrder
    workplaceTitle?: SortOrder
    phoneNumber?: SortOrder
    ebildirgeName?: SortOrder
    responsibleName?: SortOrder
    currentEmail?: SortOrder
    applicationEmail?: SortOrder
    establishmentDate?: SortOrder
    mersisNumber?: SortOrder
    taxOffice?: SortOrder
    taxNumber?: SortOrder
    workplaceAddress?: SortOrder
    workAddress?: SortOrder
    capitalStructure?: SortOrder
    registeredCapitalTRY?: SortOrder
    paidCapitalTRY?: SortOrder
  }

  export type EmployerInfoSumOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
  }

  export type ApplicationHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
  }

  export type ApplicationHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationHistorySumOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
  }

  export type ApplicationWorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    currentUserId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ApplicationWorkflowAvgOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    currentUserId?: SortOrder
  }

  export type ApplicationWorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    currentUserId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ApplicationWorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    currentUserId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ApplicationWorkflowSumOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    currentUserId?: SortOrder
  }

  export type ApplicationCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationHistoryCreateWithoutUserInput, ApplicationHistoryUncheckedCreateWithoutUserInput> | ApplicationHistoryCreateWithoutUserInput[] | ApplicationHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationHistoryCreateOrConnectWithoutUserInput | ApplicationHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationHistoryCreateManyUserInputEnvelope
    connect?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
  }

  export type ApplicationWorkflowCreateNestedManyWithoutCurrentUserInput = {
    create?: XOR<ApplicationWorkflowCreateWithoutCurrentUserInput, ApplicationWorkflowUncheckedCreateWithoutCurrentUserInput> | ApplicationWorkflowCreateWithoutCurrentUserInput[] | ApplicationWorkflowUncheckedCreateWithoutCurrentUserInput[]
    connectOrCreate?: ApplicationWorkflowCreateOrConnectWithoutCurrentUserInput | ApplicationWorkflowCreateOrConnectWithoutCurrentUserInput[]
    createMany?: ApplicationWorkflowCreateManyCurrentUserInputEnvelope
    connect?: ApplicationWorkflowWhereUniqueInput | ApplicationWorkflowWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationHistoryCreateWithoutUserInput, ApplicationHistoryUncheckedCreateWithoutUserInput> | ApplicationHistoryCreateWithoutUserInput[] | ApplicationHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationHistoryCreateOrConnectWithoutUserInput | ApplicationHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationHistoryCreateManyUserInputEnvelope
    connect?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
  }

  export type ApplicationWorkflowUncheckedCreateNestedManyWithoutCurrentUserInput = {
    create?: XOR<ApplicationWorkflowCreateWithoutCurrentUserInput, ApplicationWorkflowUncheckedCreateWithoutCurrentUserInput> | ApplicationWorkflowCreateWithoutCurrentUserInput[] | ApplicationWorkflowUncheckedCreateWithoutCurrentUserInput[]
    connectOrCreate?: ApplicationWorkflowCreateOrConnectWithoutCurrentUserInput | ApplicationWorkflowCreateOrConnectWithoutCurrentUserInput[]
    createMany?: ApplicationWorkflowCreateManyCurrentUserInputEnvelope
    connect?: ApplicationWorkflowWhereUniqueInput | ApplicationWorkflowWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApplicationUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationHistoryCreateWithoutUserInput, ApplicationHistoryUncheckedCreateWithoutUserInput> | ApplicationHistoryCreateWithoutUserInput[] | ApplicationHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationHistoryCreateOrConnectWithoutUserInput | ApplicationHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationHistoryUpsertWithWhereUniqueWithoutUserInput | ApplicationHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationHistoryCreateManyUserInputEnvelope
    set?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    disconnect?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    delete?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    connect?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    update?: ApplicationHistoryUpdateWithWhereUniqueWithoutUserInput | ApplicationHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationHistoryUpdateManyWithWhereWithoutUserInput | ApplicationHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationHistoryScalarWhereInput | ApplicationHistoryScalarWhereInput[]
  }

  export type ApplicationWorkflowUpdateManyWithoutCurrentUserNestedInput = {
    create?: XOR<ApplicationWorkflowCreateWithoutCurrentUserInput, ApplicationWorkflowUncheckedCreateWithoutCurrentUserInput> | ApplicationWorkflowCreateWithoutCurrentUserInput[] | ApplicationWorkflowUncheckedCreateWithoutCurrentUserInput[]
    connectOrCreate?: ApplicationWorkflowCreateOrConnectWithoutCurrentUserInput | ApplicationWorkflowCreateOrConnectWithoutCurrentUserInput[]
    upsert?: ApplicationWorkflowUpsertWithWhereUniqueWithoutCurrentUserInput | ApplicationWorkflowUpsertWithWhereUniqueWithoutCurrentUserInput[]
    createMany?: ApplicationWorkflowCreateManyCurrentUserInputEnvelope
    set?: ApplicationWorkflowWhereUniqueInput | ApplicationWorkflowWhereUniqueInput[]
    disconnect?: ApplicationWorkflowWhereUniqueInput | ApplicationWorkflowWhereUniqueInput[]
    delete?: ApplicationWorkflowWhereUniqueInput | ApplicationWorkflowWhereUniqueInput[]
    connect?: ApplicationWorkflowWhereUniqueInput | ApplicationWorkflowWhereUniqueInput[]
    update?: ApplicationWorkflowUpdateWithWhereUniqueWithoutCurrentUserInput | ApplicationWorkflowUpdateWithWhereUniqueWithoutCurrentUserInput[]
    updateMany?: ApplicationWorkflowUpdateManyWithWhereWithoutCurrentUserInput | ApplicationWorkflowUpdateManyWithWhereWithoutCurrentUserInput[]
    deleteMany?: ApplicationWorkflowScalarWhereInput | ApplicationWorkflowScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationHistoryCreateWithoutUserInput, ApplicationHistoryUncheckedCreateWithoutUserInput> | ApplicationHistoryCreateWithoutUserInput[] | ApplicationHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationHistoryCreateOrConnectWithoutUserInput | ApplicationHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationHistoryUpsertWithWhereUniqueWithoutUserInput | ApplicationHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationHistoryCreateManyUserInputEnvelope
    set?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    disconnect?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    delete?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    connect?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    update?: ApplicationHistoryUpdateWithWhereUniqueWithoutUserInput | ApplicationHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationHistoryUpdateManyWithWhereWithoutUserInput | ApplicationHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationHistoryScalarWhereInput | ApplicationHistoryScalarWhereInput[]
  }

  export type ApplicationWorkflowUncheckedUpdateManyWithoutCurrentUserNestedInput = {
    create?: XOR<ApplicationWorkflowCreateWithoutCurrentUserInput, ApplicationWorkflowUncheckedCreateWithoutCurrentUserInput> | ApplicationWorkflowCreateWithoutCurrentUserInput[] | ApplicationWorkflowUncheckedCreateWithoutCurrentUserInput[]
    connectOrCreate?: ApplicationWorkflowCreateOrConnectWithoutCurrentUserInput | ApplicationWorkflowCreateOrConnectWithoutCurrentUserInput[]
    upsert?: ApplicationWorkflowUpsertWithWhereUniqueWithoutCurrentUserInput | ApplicationWorkflowUpsertWithWhereUniqueWithoutCurrentUserInput[]
    createMany?: ApplicationWorkflowCreateManyCurrentUserInputEnvelope
    set?: ApplicationWorkflowWhereUniqueInput | ApplicationWorkflowWhereUniqueInput[]
    disconnect?: ApplicationWorkflowWhereUniqueInput | ApplicationWorkflowWhereUniqueInput[]
    delete?: ApplicationWorkflowWhereUniqueInput | ApplicationWorkflowWhereUniqueInput[]
    connect?: ApplicationWorkflowWhereUniqueInput | ApplicationWorkflowWhereUniqueInput[]
    update?: ApplicationWorkflowUpdateWithWhereUniqueWithoutCurrentUserInput | ApplicationWorkflowUpdateWithWhereUniqueWithoutCurrentUserInput[]
    updateMany?: ApplicationWorkflowUpdateManyWithWhereWithoutCurrentUserInput | ApplicationWorkflowUpdateManyWithWhereWithoutCurrentUserInput[]
    deleteMany?: ApplicationWorkflowScalarWhereInput | ApplicationWorkflowScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type ApplicationDocumentsCreateNestedOneWithoutApplicationInput = {
    create?: XOR<ApplicationDocumentsCreateWithoutApplicationInput, ApplicationDocumentsUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: ApplicationDocumentsCreateOrConnectWithoutApplicationInput
    connect?: ApplicationDocumentsWhereUniqueInput
  }

  export type EmployerInfoCreateNestedOneWithoutApplicationInput = {
    create?: XOR<EmployerInfoCreateWithoutApplicationInput, EmployerInfoUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: EmployerInfoCreateOrConnectWithoutApplicationInput
    connect?: EmployerInfoWhereUniqueInput
  }

  export type ApplicationHistoryCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationHistoryCreateWithoutApplicationInput, ApplicationHistoryUncheckedCreateWithoutApplicationInput> | ApplicationHistoryCreateWithoutApplicationInput[] | ApplicationHistoryUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationHistoryCreateOrConnectWithoutApplicationInput | ApplicationHistoryCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationHistoryCreateManyApplicationInputEnvelope
    connect?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
  }

  export type ApplicationWorkflowCreateNestedOneWithoutApplicationInput = {
    create?: XOR<ApplicationWorkflowCreateWithoutApplicationInput, ApplicationWorkflowUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: ApplicationWorkflowCreateOrConnectWithoutApplicationInput
    connect?: ApplicationWorkflowWhereUniqueInput
  }

  export type ApplicationDocumentsUncheckedCreateNestedOneWithoutApplicationInput = {
    create?: XOR<ApplicationDocumentsCreateWithoutApplicationInput, ApplicationDocumentsUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: ApplicationDocumentsCreateOrConnectWithoutApplicationInput
    connect?: ApplicationDocumentsWhereUniqueInput
  }

  export type EmployerInfoUncheckedCreateNestedOneWithoutApplicationInput = {
    create?: XOR<EmployerInfoCreateWithoutApplicationInput, EmployerInfoUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: EmployerInfoCreateOrConnectWithoutApplicationInput
    connect?: EmployerInfoWhereUniqueInput
  }

  export type ApplicationHistoryUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationHistoryCreateWithoutApplicationInput, ApplicationHistoryUncheckedCreateWithoutApplicationInput> | ApplicationHistoryCreateWithoutApplicationInput[] | ApplicationHistoryUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationHistoryCreateOrConnectWithoutApplicationInput | ApplicationHistoryCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationHistoryCreateManyApplicationInputEnvelope
    connect?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
  }

  export type ApplicationWorkflowUncheckedCreateNestedOneWithoutApplicationInput = {
    create?: XOR<ApplicationWorkflowCreateWithoutApplicationInput, ApplicationWorkflowUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: ApplicationWorkflowCreateOrConnectWithoutApplicationInput
    connect?: ApplicationWorkflowWhereUniqueInput
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type ApplicationDocumentsUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<ApplicationDocumentsCreateWithoutApplicationInput, ApplicationDocumentsUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: ApplicationDocumentsCreateOrConnectWithoutApplicationInput
    upsert?: ApplicationDocumentsUpsertWithoutApplicationInput
    disconnect?: ApplicationDocumentsWhereInput | boolean
    delete?: ApplicationDocumentsWhereInput | boolean
    connect?: ApplicationDocumentsWhereUniqueInput
    update?: XOR<XOR<ApplicationDocumentsUpdateToOneWithWhereWithoutApplicationInput, ApplicationDocumentsUpdateWithoutApplicationInput>, ApplicationDocumentsUncheckedUpdateWithoutApplicationInput>
  }

  export type EmployerInfoUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<EmployerInfoCreateWithoutApplicationInput, EmployerInfoUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: EmployerInfoCreateOrConnectWithoutApplicationInput
    upsert?: EmployerInfoUpsertWithoutApplicationInput
    disconnect?: EmployerInfoWhereInput | boolean
    delete?: EmployerInfoWhereInput | boolean
    connect?: EmployerInfoWhereUniqueInput
    update?: XOR<XOR<EmployerInfoUpdateToOneWithWhereWithoutApplicationInput, EmployerInfoUpdateWithoutApplicationInput>, EmployerInfoUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationHistoryUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationHistoryCreateWithoutApplicationInput, ApplicationHistoryUncheckedCreateWithoutApplicationInput> | ApplicationHistoryCreateWithoutApplicationInput[] | ApplicationHistoryUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationHistoryCreateOrConnectWithoutApplicationInput | ApplicationHistoryCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationHistoryUpsertWithWhereUniqueWithoutApplicationInput | ApplicationHistoryUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationHistoryCreateManyApplicationInputEnvelope
    set?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    disconnect?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    delete?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    connect?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    update?: ApplicationHistoryUpdateWithWhereUniqueWithoutApplicationInput | ApplicationHistoryUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationHistoryUpdateManyWithWhereWithoutApplicationInput | ApplicationHistoryUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationHistoryScalarWhereInput | ApplicationHistoryScalarWhereInput[]
  }

  export type ApplicationWorkflowUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<ApplicationWorkflowCreateWithoutApplicationInput, ApplicationWorkflowUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: ApplicationWorkflowCreateOrConnectWithoutApplicationInput
    upsert?: ApplicationWorkflowUpsertWithoutApplicationInput
    disconnect?: ApplicationWorkflowWhereInput | boolean
    delete?: ApplicationWorkflowWhereInput | boolean
    connect?: ApplicationWorkflowWhereUniqueInput
    update?: XOR<XOR<ApplicationWorkflowUpdateToOneWithWhereWithoutApplicationInput, ApplicationWorkflowUpdateWithoutApplicationInput>, ApplicationWorkflowUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationDocumentsUncheckedUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<ApplicationDocumentsCreateWithoutApplicationInput, ApplicationDocumentsUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: ApplicationDocumentsCreateOrConnectWithoutApplicationInput
    upsert?: ApplicationDocumentsUpsertWithoutApplicationInput
    disconnect?: ApplicationDocumentsWhereInput | boolean
    delete?: ApplicationDocumentsWhereInput | boolean
    connect?: ApplicationDocumentsWhereUniqueInput
    update?: XOR<XOR<ApplicationDocumentsUpdateToOneWithWhereWithoutApplicationInput, ApplicationDocumentsUpdateWithoutApplicationInput>, ApplicationDocumentsUncheckedUpdateWithoutApplicationInput>
  }

  export type EmployerInfoUncheckedUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<EmployerInfoCreateWithoutApplicationInput, EmployerInfoUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: EmployerInfoCreateOrConnectWithoutApplicationInput
    upsert?: EmployerInfoUpsertWithoutApplicationInput
    disconnect?: EmployerInfoWhereInput | boolean
    delete?: EmployerInfoWhereInput | boolean
    connect?: EmployerInfoWhereUniqueInput
    update?: XOR<XOR<EmployerInfoUpdateToOneWithWhereWithoutApplicationInput, EmployerInfoUpdateWithoutApplicationInput>, EmployerInfoUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationHistoryUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationHistoryCreateWithoutApplicationInput, ApplicationHistoryUncheckedCreateWithoutApplicationInput> | ApplicationHistoryCreateWithoutApplicationInput[] | ApplicationHistoryUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationHistoryCreateOrConnectWithoutApplicationInput | ApplicationHistoryCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationHistoryUpsertWithWhereUniqueWithoutApplicationInput | ApplicationHistoryUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationHistoryCreateManyApplicationInputEnvelope
    set?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    disconnect?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    delete?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    connect?: ApplicationHistoryWhereUniqueInput | ApplicationHistoryWhereUniqueInput[]
    update?: ApplicationHistoryUpdateWithWhereUniqueWithoutApplicationInput | ApplicationHistoryUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationHistoryUpdateManyWithWhereWithoutApplicationInput | ApplicationHistoryUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationHistoryScalarWhereInput | ApplicationHistoryScalarWhereInput[]
  }

  export type ApplicationWorkflowUncheckedUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<ApplicationWorkflowCreateWithoutApplicationInput, ApplicationWorkflowUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: ApplicationWorkflowCreateOrConnectWithoutApplicationInput
    upsert?: ApplicationWorkflowUpsertWithoutApplicationInput
    disconnect?: ApplicationWorkflowWhereInput | boolean
    delete?: ApplicationWorkflowWhereInput | boolean
    connect?: ApplicationWorkflowWhereUniqueInput
    update?: XOR<XOR<ApplicationWorkflowUpdateToOneWithWhereWithoutApplicationInput, ApplicationWorkflowUpdateWithoutApplicationInput>, ApplicationWorkflowUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutDocumentsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutDocumentsInput
    upsert?: ApplicationUpsertWithoutDocumentsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutDocumentsInput, ApplicationUpdateWithoutDocumentsInput>, ApplicationUncheckedUpdateWithoutDocumentsInput>
  }

  export type ApplicationCreateNestedOneWithoutEmployerInfoInput = {
    create?: XOR<ApplicationCreateWithoutEmployerInfoInput, ApplicationUncheckedCreateWithoutEmployerInfoInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutEmployerInfoInput
    connect?: ApplicationWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutEmployerInfoNestedInput = {
    create?: XOR<ApplicationCreateWithoutEmployerInfoInput, ApplicationUncheckedCreateWithoutEmployerInfoInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutEmployerInfoInput
    upsert?: ApplicationUpsertWithoutEmployerInfoInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutEmployerInfoInput, ApplicationUpdateWithoutEmployerInfoInput>, ApplicationUncheckedUpdateWithoutEmployerInfoInput>
  }

  export type ApplicationCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<ApplicationCreateWithoutHistoriesInput, ApplicationUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutHistoriesInput
    connect?: ApplicationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApplicationHistoriesInput = {
    create?: XOR<UserCreateWithoutApplicationHistoriesInput, UserUncheckedCreateWithoutApplicationHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<ApplicationCreateWithoutHistoriesInput, ApplicationUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutHistoriesInput
    upsert?: ApplicationUpsertWithoutHistoriesInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutHistoriesInput, ApplicationUpdateWithoutHistoriesInput>, ApplicationUncheckedUpdateWithoutHistoriesInput>
  }

  export type UserUpdateOneRequiredWithoutApplicationHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutApplicationHistoriesInput, UserUncheckedCreateWithoutApplicationHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationHistoriesInput
    upsert?: UserUpsertWithoutApplicationHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationHistoriesInput, UserUpdateWithoutApplicationHistoriesInput>, UserUncheckedUpdateWithoutApplicationHistoriesInput>
  }

  export type ApplicationCreateNestedOneWithoutWorkflowInput = {
    create?: XOR<ApplicationCreateWithoutWorkflowInput, ApplicationUncheckedCreateWithoutWorkflowInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutWorkflowInput
    connect?: ApplicationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWorkflowsInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutWorkflowNestedInput = {
    create?: XOR<ApplicationCreateWithoutWorkflowInput, ApplicationUncheckedCreateWithoutWorkflowInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutWorkflowInput
    upsert?: ApplicationUpsertWithoutWorkflowInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutWorkflowInput, ApplicationUpdateWithoutWorkflowInput>, ApplicationUncheckedUpdateWithoutWorkflowInput>
  }

  export type UserUpdateOneRequiredWithoutWorkflowsNestedInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    upsert?: UserUpsertWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkflowsInput, UserUpdateWithoutWorkflowsInput>, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ApplicationCreateWithoutApplicantInput = {
    applicationNumber: string
    status?: $Enums.ApplicationStatus
    applicationDate: Date | string
    applicationType: string
    izinStartDate?: Date | string | null
    izinEndDate?: Date | string | null
    ytbScholarshipStatus?: string | null
    foreignReferenceNumber?: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName?: string | null
    motherName?: string | null
    gender?: string | null
    placeOfBirth?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    nationality?: string | null
    passportType?: string | null
    passportNumber?: string | null
    passportExpiryDate?: Date | string | null
    passportRemainingPeriod?: string | null
    residenceAddress?: string | null
    email: string
    phoneNumber: string
    motherLanguage?: string | null
    turkishLevel?: string | null
    knownLanguages?: string | null
    educationLevel?: string | null
    specializationField?: string | null
    graduatedSchoolName?: string | null
    diplomaProfession?: string | null
    jobTitle?: string | null
    jobDescription?: string | null
    employmentReason?: string | null
    employmentType?: string | null
    employmentDuration?: string | null
    permitType?: string | null
    grossSalary?: string | null
    isCompanyPartner: boolean
    isPremiumAbroad?: boolean | null
    isHomeServiceJob?: boolean | null
    isTechRequired?: boolean | null
    isTubitakEmployee?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: ApplicationDocumentsCreateNestedOneWithoutApplicationInput
    employerInfo?: EmployerInfoCreateNestedOneWithoutApplicationInput
    histories?: ApplicationHistoryCreateNestedManyWithoutApplicationInput
    workflow?: ApplicationWorkflowCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutApplicantInput = {
    id?: number
    applicationNumber: string
    status?: $Enums.ApplicationStatus
    applicationDate: Date | string
    applicationType: string
    izinStartDate?: Date | string | null
    izinEndDate?: Date | string | null
    ytbScholarshipStatus?: string | null
    foreignReferenceNumber?: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName?: string | null
    motherName?: string | null
    gender?: string | null
    placeOfBirth?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    nationality?: string | null
    passportType?: string | null
    passportNumber?: string | null
    passportExpiryDate?: Date | string | null
    passportRemainingPeriod?: string | null
    residenceAddress?: string | null
    email: string
    phoneNumber: string
    motherLanguage?: string | null
    turkishLevel?: string | null
    knownLanguages?: string | null
    educationLevel?: string | null
    specializationField?: string | null
    graduatedSchoolName?: string | null
    diplomaProfession?: string | null
    jobTitle?: string | null
    jobDescription?: string | null
    employmentReason?: string | null
    employmentType?: string | null
    employmentDuration?: string | null
    permitType?: string | null
    grossSalary?: string | null
    isCompanyPartner: boolean
    isPremiumAbroad?: boolean | null
    isHomeServiceJob?: boolean | null
    isTechRequired?: boolean | null
    isTubitakEmployee?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: ApplicationDocumentsUncheckedCreateNestedOneWithoutApplicationInput
    employerInfo?: EmployerInfoUncheckedCreateNestedOneWithoutApplicationInput
    histories?: ApplicationHistoryUncheckedCreateNestedManyWithoutApplicationInput
    workflow?: ApplicationWorkflowUncheckedCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationCreateManyApplicantInputEnvelope = {
    data: ApplicationCreateManyApplicantInput | ApplicationCreateManyApplicantInput[]
  }

  export type ApplicationHistoryCreateWithoutUserInput = {
    action: string
    comment?: string | null
    createdAt?: Date | string
    application: ApplicationCreateNestedOneWithoutHistoriesInput
  }

  export type ApplicationHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    applicationId: number
    action: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type ApplicationHistoryCreateOrConnectWithoutUserInput = {
    where: ApplicationHistoryWhereUniqueInput
    create: XOR<ApplicationHistoryCreateWithoutUserInput, ApplicationHistoryUncheckedCreateWithoutUserInput>
  }

  export type ApplicationHistoryCreateManyUserInputEnvelope = {
    data: ApplicationHistoryCreateManyUserInput | ApplicationHistoryCreateManyUserInput[]
  }

  export type ApplicationWorkflowCreateWithoutCurrentUserInput = {
    assignedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutWorkflowInput
  }

  export type ApplicationWorkflowUncheckedCreateWithoutCurrentUserInput = {
    id?: number
    applicationId: number
    assignedAt?: Date | string
  }

  export type ApplicationWorkflowCreateOrConnectWithoutCurrentUserInput = {
    where: ApplicationWorkflowWhereUniqueInput
    create: XOR<ApplicationWorkflowCreateWithoutCurrentUserInput, ApplicationWorkflowUncheckedCreateWithoutCurrentUserInput>
  }

  export type ApplicationWorkflowCreateManyCurrentUserInputEnvelope = {
    data: ApplicationWorkflowCreateManyCurrentUserInput | ApplicationWorkflowCreateManyCurrentUserInput[]
  }

  export type ApplicationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutApplicantInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutApplicantInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: IntFilter<"Application"> | number
    applicationNumber?: StringFilter<"Application"> | string
    applicantId?: IntFilter<"Application"> | number
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    applicationDate?: DateTimeFilter<"Application"> | Date | string
    applicationType?: StringFilter<"Application"> | string
    izinStartDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    izinEndDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    ytbScholarshipStatus?: StringNullableFilter<"Application"> | string | null
    foreignReferenceNumber?: StringNullableFilter<"Application"> | string | null
    foreignIdentityNumber?: StringFilter<"Application"> | string
    firstName?: StringFilter<"Application"> | string
    lastName?: StringFilter<"Application"> | string
    fatherName?: StringNullableFilter<"Application"> | string | null
    motherName?: StringNullableFilter<"Application"> | string | null
    gender?: StringNullableFilter<"Application"> | string | null
    placeOfBirth?: StringNullableFilter<"Application"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Application"> | Date | string | null
    maritalStatus?: StringNullableFilter<"Application"> | string | null
    nationality?: StringNullableFilter<"Application"> | string | null
    passportType?: StringNullableFilter<"Application"> | string | null
    passportNumber?: StringNullableFilter<"Application"> | string | null
    passportExpiryDate?: DateTimeNullableFilter<"Application"> | Date | string | null
    passportRemainingPeriod?: StringNullableFilter<"Application"> | string | null
    residenceAddress?: StringNullableFilter<"Application"> | string | null
    email?: StringFilter<"Application"> | string
    phoneNumber?: StringFilter<"Application"> | string
    motherLanguage?: StringNullableFilter<"Application"> | string | null
    turkishLevel?: StringNullableFilter<"Application"> | string | null
    knownLanguages?: StringNullableFilter<"Application"> | string | null
    educationLevel?: StringNullableFilter<"Application"> | string | null
    specializationField?: StringNullableFilter<"Application"> | string | null
    graduatedSchoolName?: StringNullableFilter<"Application"> | string | null
    diplomaProfession?: StringNullableFilter<"Application"> | string | null
    jobTitle?: StringNullableFilter<"Application"> | string | null
    jobDescription?: StringNullableFilter<"Application"> | string | null
    employmentReason?: StringNullableFilter<"Application"> | string | null
    employmentType?: StringNullableFilter<"Application"> | string | null
    employmentDuration?: StringNullableFilter<"Application"> | string | null
    permitType?: StringNullableFilter<"Application"> | string | null
    grossSalary?: StringNullableFilter<"Application"> | string | null
    isCompanyPartner?: BoolFilter<"Application"> | boolean
    isPremiumAbroad?: BoolNullableFilter<"Application"> | boolean | null
    isHomeServiceJob?: BoolNullableFilter<"Application"> | boolean | null
    isTechRequired?: BoolNullableFilter<"Application"> | boolean | null
    isTubitakEmployee?: BoolNullableFilter<"Application"> | boolean | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type ApplicationHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ApplicationHistoryWhereUniqueInput
    update: XOR<ApplicationHistoryUpdateWithoutUserInput, ApplicationHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicationHistoryCreateWithoutUserInput, ApplicationHistoryUncheckedCreateWithoutUserInput>
  }

  export type ApplicationHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ApplicationHistoryWhereUniqueInput
    data: XOR<ApplicationHistoryUpdateWithoutUserInput, ApplicationHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ApplicationHistoryScalarWhereInput
    data: XOR<ApplicationHistoryUpdateManyMutationInput, ApplicationHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ApplicationHistoryScalarWhereInput = {
    AND?: ApplicationHistoryScalarWhereInput | ApplicationHistoryScalarWhereInput[]
    OR?: ApplicationHistoryScalarWhereInput[]
    NOT?: ApplicationHistoryScalarWhereInput | ApplicationHistoryScalarWhereInput[]
    id?: IntFilter<"ApplicationHistory"> | number
    applicationId?: IntFilter<"ApplicationHistory"> | number
    userId?: IntFilter<"ApplicationHistory"> | number
    action?: StringFilter<"ApplicationHistory"> | string
    comment?: StringNullableFilter<"ApplicationHistory"> | string | null
    createdAt?: DateTimeFilter<"ApplicationHistory"> | Date | string
  }

  export type ApplicationWorkflowUpsertWithWhereUniqueWithoutCurrentUserInput = {
    where: ApplicationWorkflowWhereUniqueInput
    update: XOR<ApplicationWorkflowUpdateWithoutCurrentUserInput, ApplicationWorkflowUncheckedUpdateWithoutCurrentUserInput>
    create: XOR<ApplicationWorkflowCreateWithoutCurrentUserInput, ApplicationWorkflowUncheckedCreateWithoutCurrentUserInput>
  }

  export type ApplicationWorkflowUpdateWithWhereUniqueWithoutCurrentUserInput = {
    where: ApplicationWorkflowWhereUniqueInput
    data: XOR<ApplicationWorkflowUpdateWithoutCurrentUserInput, ApplicationWorkflowUncheckedUpdateWithoutCurrentUserInput>
  }

  export type ApplicationWorkflowUpdateManyWithWhereWithoutCurrentUserInput = {
    where: ApplicationWorkflowScalarWhereInput
    data: XOR<ApplicationWorkflowUpdateManyMutationInput, ApplicationWorkflowUncheckedUpdateManyWithoutCurrentUserInput>
  }

  export type ApplicationWorkflowScalarWhereInput = {
    AND?: ApplicationWorkflowScalarWhereInput | ApplicationWorkflowScalarWhereInput[]
    OR?: ApplicationWorkflowScalarWhereInput[]
    NOT?: ApplicationWorkflowScalarWhereInput | ApplicationWorkflowScalarWhereInput[]
    id?: IntFilter<"ApplicationWorkflow"> | number
    applicationId?: IntFilter<"ApplicationWorkflow"> | number
    currentUserId?: IntFilter<"ApplicationWorkflow"> | number
    assignedAt?: DateTimeFilter<"ApplicationWorkflow"> | Date | string
  }

  export type UserCreateWithoutApplicationsInput = {
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicationHistories?: ApplicationHistoryCreateNestedManyWithoutUserInput
    workflows?: ApplicationWorkflowCreateNestedManyWithoutCurrentUserInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: number
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicationHistories?: ApplicationHistoryUncheckedCreateNestedManyWithoutUserInput
    workflows?: ApplicationWorkflowUncheckedCreateNestedManyWithoutCurrentUserInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type ApplicationDocumentsCreateWithoutApplicationInput = {
    applicationPetition?: string | null
    passport?: string | null
    employmentContract?: string | null
    diploma?: string | null
    additionalDocument?: string | null
    employmentNotification?: string | null
    permitTerminationPetition?: string | null
    activityCertificate?: string | null
    tradeRegistryGazette?: string | null
    balanceSheet?: string | null
    tourismLicense?: string | null
  }

  export type ApplicationDocumentsUncheckedCreateWithoutApplicationInput = {
    id?: number
    applicationPetition?: string | null
    passport?: string | null
    employmentContract?: string | null
    diploma?: string | null
    additionalDocument?: string | null
    employmentNotification?: string | null
    permitTerminationPetition?: string | null
    activityCertificate?: string | null
    tradeRegistryGazette?: string | null
    balanceSheet?: string | null
    tourismLicense?: string | null
  }

  export type ApplicationDocumentsCreateOrConnectWithoutApplicationInput = {
    where: ApplicationDocumentsWhereUniqueInput
    create: XOR<ApplicationDocumentsCreateWithoutApplicationInput, ApplicationDocumentsUncheckedCreateWithoutApplicationInput>
  }

  export type EmployerInfoCreateWithoutApplicationInput = {
    registrationNumber?: string | null
    companyType?: string | null
    naceCode?: string | null
    workplaceTitle?: string | null
    phoneNumber?: string | null
    ebildirgeName?: string | null
    responsibleName?: string | null
    currentEmail?: string | null
    applicationEmail?: string | null
    establishmentDate?: Date | string | null
    mersisNumber?: string | null
    taxOffice?: string | null
    taxNumber?: string | null
    workplaceAddress?: string | null
    workAddress?: string | null
    capitalStructure?: string | null
    registeredCapitalTRY?: string | null
    paidCapitalTRY?: string | null
  }

  export type EmployerInfoUncheckedCreateWithoutApplicationInput = {
    id?: number
    registrationNumber?: string | null
    companyType?: string | null
    naceCode?: string | null
    workplaceTitle?: string | null
    phoneNumber?: string | null
    ebildirgeName?: string | null
    responsibleName?: string | null
    currentEmail?: string | null
    applicationEmail?: string | null
    establishmentDate?: Date | string | null
    mersisNumber?: string | null
    taxOffice?: string | null
    taxNumber?: string | null
    workplaceAddress?: string | null
    workAddress?: string | null
    capitalStructure?: string | null
    registeredCapitalTRY?: string | null
    paidCapitalTRY?: string | null
  }

  export type EmployerInfoCreateOrConnectWithoutApplicationInput = {
    where: EmployerInfoWhereUniqueInput
    create: XOR<EmployerInfoCreateWithoutApplicationInput, EmployerInfoUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationHistoryCreateWithoutApplicationInput = {
    action: string
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationHistoriesInput
  }

  export type ApplicationHistoryUncheckedCreateWithoutApplicationInput = {
    id?: number
    userId: number
    action: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type ApplicationHistoryCreateOrConnectWithoutApplicationInput = {
    where: ApplicationHistoryWhereUniqueInput
    create: XOR<ApplicationHistoryCreateWithoutApplicationInput, ApplicationHistoryUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationHistoryCreateManyApplicationInputEnvelope = {
    data: ApplicationHistoryCreateManyApplicationInput | ApplicationHistoryCreateManyApplicationInput[]
  }

  export type ApplicationWorkflowCreateWithoutApplicationInput = {
    assignedAt?: Date | string
    currentUser: UserCreateNestedOneWithoutWorkflowsInput
  }

  export type ApplicationWorkflowUncheckedCreateWithoutApplicationInput = {
    id?: number
    currentUserId: number
    assignedAt?: Date | string
  }

  export type ApplicationWorkflowCreateOrConnectWithoutApplicationInput = {
    where: ApplicationWorkflowWhereUniqueInput
    create: XOR<ApplicationWorkflowCreateWithoutApplicationInput, ApplicationWorkflowUncheckedCreateWithoutApplicationInput>
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationHistories?: ApplicationHistoryUpdateManyWithoutUserNestedInput
    workflows?: ApplicationWorkflowUpdateManyWithoutCurrentUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationHistories?: ApplicationHistoryUncheckedUpdateManyWithoutUserNestedInput
    workflows?: ApplicationWorkflowUncheckedUpdateManyWithoutCurrentUserNestedInput
  }

  export type ApplicationDocumentsUpsertWithoutApplicationInput = {
    update: XOR<ApplicationDocumentsUpdateWithoutApplicationInput, ApplicationDocumentsUncheckedUpdateWithoutApplicationInput>
    create: XOR<ApplicationDocumentsCreateWithoutApplicationInput, ApplicationDocumentsUncheckedCreateWithoutApplicationInput>
    where?: ApplicationDocumentsWhereInput
  }

  export type ApplicationDocumentsUpdateToOneWithWhereWithoutApplicationInput = {
    where?: ApplicationDocumentsWhereInput
    data: XOR<ApplicationDocumentsUpdateWithoutApplicationInput, ApplicationDocumentsUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationDocumentsUpdateWithoutApplicationInput = {
    applicationPetition?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    employmentContract?: NullableStringFieldUpdateOperationsInput | string | null
    diploma?: NullableStringFieldUpdateOperationsInput | string | null
    additionalDocument?: NullableStringFieldUpdateOperationsInput | string | null
    employmentNotification?: NullableStringFieldUpdateOperationsInput | string | null
    permitTerminationPetition?: NullableStringFieldUpdateOperationsInput | string | null
    activityCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tradeRegistryGazette?: NullableStringFieldUpdateOperationsInput | string | null
    balanceSheet?: NullableStringFieldUpdateOperationsInput | string | null
    tourismLicense?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationDocumentsUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationPetition?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    employmentContract?: NullableStringFieldUpdateOperationsInput | string | null
    diploma?: NullableStringFieldUpdateOperationsInput | string | null
    additionalDocument?: NullableStringFieldUpdateOperationsInput | string | null
    employmentNotification?: NullableStringFieldUpdateOperationsInput | string | null
    permitTerminationPetition?: NullableStringFieldUpdateOperationsInput | string | null
    activityCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tradeRegistryGazette?: NullableStringFieldUpdateOperationsInput | string | null
    balanceSheet?: NullableStringFieldUpdateOperationsInput | string | null
    tourismLicense?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployerInfoUpsertWithoutApplicationInput = {
    update: XOR<EmployerInfoUpdateWithoutApplicationInput, EmployerInfoUncheckedUpdateWithoutApplicationInput>
    create: XOR<EmployerInfoCreateWithoutApplicationInput, EmployerInfoUncheckedCreateWithoutApplicationInput>
    where?: EmployerInfoWhereInput
  }

  export type EmployerInfoUpdateToOneWithWhereWithoutApplicationInput = {
    where?: EmployerInfoWhereInput
    data: XOR<EmployerInfoUpdateWithoutApplicationInput, EmployerInfoUncheckedUpdateWithoutApplicationInput>
  }

  export type EmployerInfoUpdateWithoutApplicationInput = {
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyType?: NullableStringFieldUpdateOperationsInput | string | null
    naceCode?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceTitle?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ebildirgeName?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleName?: NullableStringFieldUpdateOperationsInput | string | null
    currentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    applicationEmail?: NullableStringFieldUpdateOperationsInput | string | null
    establishmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mersisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    taxOffice?: NullableStringFieldUpdateOperationsInput | string | null
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    workAddress?: NullableStringFieldUpdateOperationsInput | string | null
    capitalStructure?: NullableStringFieldUpdateOperationsInput | string | null
    registeredCapitalTRY?: NullableStringFieldUpdateOperationsInput | string | null
    paidCapitalTRY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployerInfoUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyType?: NullableStringFieldUpdateOperationsInput | string | null
    naceCode?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceTitle?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ebildirgeName?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleName?: NullableStringFieldUpdateOperationsInput | string | null
    currentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    applicationEmail?: NullableStringFieldUpdateOperationsInput | string | null
    establishmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mersisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    taxOffice?: NullableStringFieldUpdateOperationsInput | string | null
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    workAddress?: NullableStringFieldUpdateOperationsInput | string | null
    capitalStructure?: NullableStringFieldUpdateOperationsInput | string | null
    registeredCapitalTRY?: NullableStringFieldUpdateOperationsInput | string | null
    paidCapitalTRY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationHistoryUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationHistoryWhereUniqueInput
    update: XOR<ApplicationHistoryUpdateWithoutApplicationInput, ApplicationHistoryUncheckedUpdateWithoutApplicationInput>
    create: XOR<ApplicationHistoryCreateWithoutApplicationInput, ApplicationHistoryUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationHistoryUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationHistoryWhereUniqueInput
    data: XOR<ApplicationHistoryUpdateWithoutApplicationInput, ApplicationHistoryUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationHistoryUpdateManyWithWhereWithoutApplicationInput = {
    where: ApplicationHistoryScalarWhereInput
    data: XOR<ApplicationHistoryUpdateManyMutationInput, ApplicationHistoryUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ApplicationWorkflowUpsertWithoutApplicationInput = {
    update: XOR<ApplicationWorkflowUpdateWithoutApplicationInput, ApplicationWorkflowUncheckedUpdateWithoutApplicationInput>
    create: XOR<ApplicationWorkflowCreateWithoutApplicationInput, ApplicationWorkflowUncheckedCreateWithoutApplicationInput>
    where?: ApplicationWorkflowWhereInput
  }

  export type ApplicationWorkflowUpdateToOneWithWhereWithoutApplicationInput = {
    where?: ApplicationWorkflowWhereInput
    data: XOR<ApplicationWorkflowUpdateWithoutApplicationInput, ApplicationWorkflowUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationWorkflowUpdateWithoutApplicationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentUser?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
  }

  export type ApplicationWorkflowUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    currentUserId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateWithoutDocumentsInput = {
    applicationNumber: string
    status?: $Enums.ApplicationStatus
    applicationDate: Date | string
    applicationType: string
    izinStartDate?: Date | string | null
    izinEndDate?: Date | string | null
    ytbScholarshipStatus?: string | null
    foreignReferenceNumber?: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName?: string | null
    motherName?: string | null
    gender?: string | null
    placeOfBirth?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    nationality?: string | null
    passportType?: string | null
    passportNumber?: string | null
    passportExpiryDate?: Date | string | null
    passportRemainingPeriod?: string | null
    residenceAddress?: string | null
    email: string
    phoneNumber: string
    motherLanguage?: string | null
    turkishLevel?: string | null
    knownLanguages?: string | null
    educationLevel?: string | null
    specializationField?: string | null
    graduatedSchoolName?: string | null
    diplomaProfession?: string | null
    jobTitle?: string | null
    jobDescription?: string | null
    employmentReason?: string | null
    employmentType?: string | null
    employmentDuration?: string | null
    permitType?: string | null
    grossSalary?: string | null
    isCompanyPartner: boolean
    isPremiumAbroad?: boolean | null
    isHomeServiceJob?: boolean | null
    isTechRequired?: boolean | null
    isTubitakEmployee?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutApplicationsInput
    employerInfo?: EmployerInfoCreateNestedOneWithoutApplicationInput
    histories?: ApplicationHistoryCreateNestedManyWithoutApplicationInput
    workflow?: ApplicationWorkflowCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutDocumentsInput = {
    id?: number
    applicationNumber: string
    applicantId: number
    status?: $Enums.ApplicationStatus
    applicationDate: Date | string
    applicationType: string
    izinStartDate?: Date | string | null
    izinEndDate?: Date | string | null
    ytbScholarshipStatus?: string | null
    foreignReferenceNumber?: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName?: string | null
    motherName?: string | null
    gender?: string | null
    placeOfBirth?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    nationality?: string | null
    passportType?: string | null
    passportNumber?: string | null
    passportExpiryDate?: Date | string | null
    passportRemainingPeriod?: string | null
    residenceAddress?: string | null
    email: string
    phoneNumber: string
    motherLanguage?: string | null
    turkishLevel?: string | null
    knownLanguages?: string | null
    educationLevel?: string | null
    specializationField?: string | null
    graduatedSchoolName?: string | null
    diplomaProfession?: string | null
    jobTitle?: string | null
    jobDescription?: string | null
    employmentReason?: string | null
    employmentType?: string | null
    employmentDuration?: string | null
    permitType?: string | null
    grossSalary?: string | null
    isCompanyPartner: boolean
    isPremiumAbroad?: boolean | null
    isHomeServiceJob?: boolean | null
    isTechRequired?: boolean | null
    isTubitakEmployee?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employerInfo?: EmployerInfoUncheckedCreateNestedOneWithoutApplicationInput
    histories?: ApplicationHistoryUncheckedCreateNestedManyWithoutApplicationInput
    workflow?: ApplicationWorkflowUncheckedCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutDocumentsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
  }

  export type ApplicationUpsertWithoutDocumentsInput = {
    update: XOR<ApplicationUpdateWithoutDocumentsInput, ApplicationUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ApplicationCreateWithoutDocumentsInput, ApplicationUncheckedCreateWithoutDocumentsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutDocumentsInput, ApplicationUncheckedUpdateWithoutDocumentsInput>
  }

  export type ApplicationUpdateWithoutDocumentsInput = {
    applicationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    employerInfo?: EmployerInfoUpdateOneWithoutApplicationNestedInput
    histories?: ApplicationHistoryUpdateManyWithoutApplicationNestedInput
    workflow?: ApplicationWorkflowUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employerInfo?: EmployerInfoUncheckedUpdateOneWithoutApplicationNestedInput
    histories?: ApplicationHistoryUncheckedUpdateManyWithoutApplicationNestedInput
    workflow?: ApplicationWorkflowUncheckedUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationCreateWithoutEmployerInfoInput = {
    applicationNumber: string
    status?: $Enums.ApplicationStatus
    applicationDate: Date | string
    applicationType: string
    izinStartDate?: Date | string | null
    izinEndDate?: Date | string | null
    ytbScholarshipStatus?: string | null
    foreignReferenceNumber?: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName?: string | null
    motherName?: string | null
    gender?: string | null
    placeOfBirth?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    nationality?: string | null
    passportType?: string | null
    passportNumber?: string | null
    passportExpiryDate?: Date | string | null
    passportRemainingPeriod?: string | null
    residenceAddress?: string | null
    email: string
    phoneNumber: string
    motherLanguage?: string | null
    turkishLevel?: string | null
    knownLanguages?: string | null
    educationLevel?: string | null
    specializationField?: string | null
    graduatedSchoolName?: string | null
    diplomaProfession?: string | null
    jobTitle?: string | null
    jobDescription?: string | null
    employmentReason?: string | null
    employmentType?: string | null
    employmentDuration?: string | null
    permitType?: string | null
    grossSalary?: string | null
    isCompanyPartner: boolean
    isPremiumAbroad?: boolean | null
    isHomeServiceJob?: boolean | null
    isTechRequired?: boolean | null
    isTubitakEmployee?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutApplicationsInput
    documents?: ApplicationDocumentsCreateNestedOneWithoutApplicationInput
    histories?: ApplicationHistoryCreateNestedManyWithoutApplicationInput
    workflow?: ApplicationWorkflowCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutEmployerInfoInput = {
    id?: number
    applicationNumber: string
    applicantId: number
    status?: $Enums.ApplicationStatus
    applicationDate: Date | string
    applicationType: string
    izinStartDate?: Date | string | null
    izinEndDate?: Date | string | null
    ytbScholarshipStatus?: string | null
    foreignReferenceNumber?: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName?: string | null
    motherName?: string | null
    gender?: string | null
    placeOfBirth?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    nationality?: string | null
    passportType?: string | null
    passportNumber?: string | null
    passportExpiryDate?: Date | string | null
    passportRemainingPeriod?: string | null
    residenceAddress?: string | null
    email: string
    phoneNumber: string
    motherLanguage?: string | null
    turkishLevel?: string | null
    knownLanguages?: string | null
    educationLevel?: string | null
    specializationField?: string | null
    graduatedSchoolName?: string | null
    diplomaProfession?: string | null
    jobTitle?: string | null
    jobDescription?: string | null
    employmentReason?: string | null
    employmentType?: string | null
    employmentDuration?: string | null
    permitType?: string | null
    grossSalary?: string | null
    isCompanyPartner: boolean
    isPremiumAbroad?: boolean | null
    isHomeServiceJob?: boolean | null
    isTechRequired?: boolean | null
    isTubitakEmployee?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: ApplicationDocumentsUncheckedCreateNestedOneWithoutApplicationInput
    histories?: ApplicationHistoryUncheckedCreateNestedManyWithoutApplicationInput
    workflow?: ApplicationWorkflowUncheckedCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutEmployerInfoInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutEmployerInfoInput, ApplicationUncheckedCreateWithoutEmployerInfoInput>
  }

  export type ApplicationUpsertWithoutEmployerInfoInput = {
    update: XOR<ApplicationUpdateWithoutEmployerInfoInput, ApplicationUncheckedUpdateWithoutEmployerInfoInput>
    create: XOR<ApplicationCreateWithoutEmployerInfoInput, ApplicationUncheckedCreateWithoutEmployerInfoInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutEmployerInfoInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutEmployerInfoInput, ApplicationUncheckedUpdateWithoutEmployerInfoInput>
  }

  export type ApplicationUpdateWithoutEmployerInfoInput = {
    applicationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: ApplicationDocumentsUpdateOneWithoutApplicationNestedInput
    histories?: ApplicationHistoryUpdateManyWithoutApplicationNestedInput
    workflow?: ApplicationWorkflowUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutEmployerInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ApplicationDocumentsUncheckedUpdateOneWithoutApplicationNestedInput
    histories?: ApplicationHistoryUncheckedUpdateManyWithoutApplicationNestedInput
    workflow?: ApplicationWorkflowUncheckedUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationCreateWithoutHistoriesInput = {
    applicationNumber: string
    status?: $Enums.ApplicationStatus
    applicationDate: Date | string
    applicationType: string
    izinStartDate?: Date | string | null
    izinEndDate?: Date | string | null
    ytbScholarshipStatus?: string | null
    foreignReferenceNumber?: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName?: string | null
    motherName?: string | null
    gender?: string | null
    placeOfBirth?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    nationality?: string | null
    passportType?: string | null
    passportNumber?: string | null
    passportExpiryDate?: Date | string | null
    passportRemainingPeriod?: string | null
    residenceAddress?: string | null
    email: string
    phoneNumber: string
    motherLanguage?: string | null
    turkishLevel?: string | null
    knownLanguages?: string | null
    educationLevel?: string | null
    specializationField?: string | null
    graduatedSchoolName?: string | null
    diplomaProfession?: string | null
    jobTitle?: string | null
    jobDescription?: string | null
    employmentReason?: string | null
    employmentType?: string | null
    employmentDuration?: string | null
    permitType?: string | null
    grossSalary?: string | null
    isCompanyPartner: boolean
    isPremiumAbroad?: boolean | null
    isHomeServiceJob?: boolean | null
    isTechRequired?: boolean | null
    isTubitakEmployee?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutApplicationsInput
    documents?: ApplicationDocumentsCreateNestedOneWithoutApplicationInput
    employerInfo?: EmployerInfoCreateNestedOneWithoutApplicationInput
    workflow?: ApplicationWorkflowCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutHistoriesInput = {
    id?: number
    applicationNumber: string
    applicantId: number
    status?: $Enums.ApplicationStatus
    applicationDate: Date | string
    applicationType: string
    izinStartDate?: Date | string | null
    izinEndDate?: Date | string | null
    ytbScholarshipStatus?: string | null
    foreignReferenceNumber?: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName?: string | null
    motherName?: string | null
    gender?: string | null
    placeOfBirth?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    nationality?: string | null
    passportType?: string | null
    passportNumber?: string | null
    passportExpiryDate?: Date | string | null
    passportRemainingPeriod?: string | null
    residenceAddress?: string | null
    email: string
    phoneNumber: string
    motherLanguage?: string | null
    turkishLevel?: string | null
    knownLanguages?: string | null
    educationLevel?: string | null
    specializationField?: string | null
    graduatedSchoolName?: string | null
    diplomaProfession?: string | null
    jobTitle?: string | null
    jobDescription?: string | null
    employmentReason?: string | null
    employmentType?: string | null
    employmentDuration?: string | null
    permitType?: string | null
    grossSalary?: string | null
    isCompanyPartner: boolean
    isPremiumAbroad?: boolean | null
    isHomeServiceJob?: boolean | null
    isTechRequired?: boolean | null
    isTubitakEmployee?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: ApplicationDocumentsUncheckedCreateNestedOneWithoutApplicationInput
    employerInfo?: EmployerInfoUncheckedCreateNestedOneWithoutApplicationInput
    workflow?: ApplicationWorkflowUncheckedCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutHistoriesInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutHistoriesInput, ApplicationUncheckedCreateWithoutHistoriesInput>
  }

  export type UserCreateWithoutApplicationHistoriesInput = {
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    workflows?: ApplicationWorkflowCreateNestedManyWithoutCurrentUserInput
  }

  export type UserUncheckedCreateWithoutApplicationHistoriesInput = {
    id?: number
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    workflows?: ApplicationWorkflowUncheckedCreateNestedManyWithoutCurrentUserInput
  }

  export type UserCreateOrConnectWithoutApplicationHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationHistoriesInput, UserUncheckedCreateWithoutApplicationHistoriesInput>
  }

  export type ApplicationUpsertWithoutHistoriesInput = {
    update: XOR<ApplicationUpdateWithoutHistoriesInput, ApplicationUncheckedUpdateWithoutHistoriesInput>
    create: XOR<ApplicationCreateWithoutHistoriesInput, ApplicationUncheckedCreateWithoutHistoriesInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutHistoriesInput, ApplicationUncheckedUpdateWithoutHistoriesInput>
  }

  export type ApplicationUpdateWithoutHistoriesInput = {
    applicationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: ApplicationDocumentsUpdateOneWithoutApplicationNestedInput
    employerInfo?: EmployerInfoUpdateOneWithoutApplicationNestedInput
    workflow?: ApplicationWorkflowUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ApplicationDocumentsUncheckedUpdateOneWithoutApplicationNestedInput
    employerInfo?: EmployerInfoUncheckedUpdateOneWithoutApplicationNestedInput
    workflow?: ApplicationWorkflowUncheckedUpdateOneWithoutApplicationNestedInput
  }

  export type UserUpsertWithoutApplicationHistoriesInput = {
    update: XOR<UserUpdateWithoutApplicationHistoriesInput, UserUncheckedUpdateWithoutApplicationHistoriesInput>
    create: XOR<UserCreateWithoutApplicationHistoriesInput, UserUncheckedCreateWithoutApplicationHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationHistoriesInput, UserUncheckedUpdateWithoutApplicationHistoriesInput>
  }

  export type UserUpdateWithoutApplicationHistoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    workflows?: ApplicationWorkflowUpdateManyWithoutCurrentUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    workflows?: ApplicationWorkflowUncheckedUpdateManyWithoutCurrentUserNestedInput
  }

  export type ApplicationCreateWithoutWorkflowInput = {
    applicationNumber: string
    status?: $Enums.ApplicationStatus
    applicationDate: Date | string
    applicationType: string
    izinStartDate?: Date | string | null
    izinEndDate?: Date | string | null
    ytbScholarshipStatus?: string | null
    foreignReferenceNumber?: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName?: string | null
    motherName?: string | null
    gender?: string | null
    placeOfBirth?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    nationality?: string | null
    passportType?: string | null
    passportNumber?: string | null
    passportExpiryDate?: Date | string | null
    passportRemainingPeriod?: string | null
    residenceAddress?: string | null
    email: string
    phoneNumber: string
    motherLanguage?: string | null
    turkishLevel?: string | null
    knownLanguages?: string | null
    educationLevel?: string | null
    specializationField?: string | null
    graduatedSchoolName?: string | null
    diplomaProfession?: string | null
    jobTitle?: string | null
    jobDescription?: string | null
    employmentReason?: string | null
    employmentType?: string | null
    employmentDuration?: string | null
    permitType?: string | null
    grossSalary?: string | null
    isCompanyPartner: boolean
    isPremiumAbroad?: boolean | null
    isHomeServiceJob?: boolean | null
    isTechRequired?: boolean | null
    isTubitakEmployee?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutApplicationsInput
    documents?: ApplicationDocumentsCreateNestedOneWithoutApplicationInput
    employerInfo?: EmployerInfoCreateNestedOneWithoutApplicationInput
    histories?: ApplicationHistoryCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutWorkflowInput = {
    id?: number
    applicationNumber: string
    applicantId: number
    status?: $Enums.ApplicationStatus
    applicationDate: Date | string
    applicationType: string
    izinStartDate?: Date | string | null
    izinEndDate?: Date | string | null
    ytbScholarshipStatus?: string | null
    foreignReferenceNumber?: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName?: string | null
    motherName?: string | null
    gender?: string | null
    placeOfBirth?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    nationality?: string | null
    passportType?: string | null
    passportNumber?: string | null
    passportExpiryDate?: Date | string | null
    passportRemainingPeriod?: string | null
    residenceAddress?: string | null
    email: string
    phoneNumber: string
    motherLanguage?: string | null
    turkishLevel?: string | null
    knownLanguages?: string | null
    educationLevel?: string | null
    specializationField?: string | null
    graduatedSchoolName?: string | null
    diplomaProfession?: string | null
    jobTitle?: string | null
    jobDescription?: string | null
    employmentReason?: string | null
    employmentType?: string | null
    employmentDuration?: string | null
    permitType?: string | null
    grossSalary?: string | null
    isCompanyPartner: boolean
    isPremiumAbroad?: boolean | null
    isHomeServiceJob?: boolean | null
    isTechRequired?: boolean | null
    isTubitakEmployee?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: ApplicationDocumentsUncheckedCreateNestedOneWithoutApplicationInput
    employerInfo?: EmployerInfoUncheckedCreateNestedOneWithoutApplicationInput
    histories?: ApplicationHistoryUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutWorkflowInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutWorkflowInput, ApplicationUncheckedCreateWithoutWorkflowInput>
  }

  export type UserCreateWithoutWorkflowsInput = {
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    applicationHistories?: ApplicationHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkflowsInput = {
    id?: number
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    applicationHistories?: ApplicationHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkflowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
  }

  export type ApplicationUpsertWithoutWorkflowInput = {
    update: XOR<ApplicationUpdateWithoutWorkflowInput, ApplicationUncheckedUpdateWithoutWorkflowInput>
    create: XOR<ApplicationCreateWithoutWorkflowInput, ApplicationUncheckedCreateWithoutWorkflowInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutWorkflowInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutWorkflowInput, ApplicationUncheckedUpdateWithoutWorkflowInput>
  }

  export type ApplicationUpdateWithoutWorkflowInput = {
    applicationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    documents?: ApplicationDocumentsUpdateOneWithoutApplicationNestedInput
    employerInfo?: EmployerInfoUpdateOneWithoutApplicationNestedInput
    histories?: ApplicationHistoryUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationNumber?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ApplicationDocumentsUncheckedUpdateOneWithoutApplicationNestedInput
    employerInfo?: EmployerInfoUncheckedUpdateOneWithoutApplicationNestedInput
    histories?: ApplicationHistoryUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type UserUpsertWithoutWorkflowsInput = {
    update: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkflowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type UserUpdateWithoutWorkflowsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    applicationHistories?: ApplicationHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkflowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    applicationHistories?: ApplicationHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApplicationCreateManyApplicantInput = {
    id?: number
    applicationNumber: string
    status?: $Enums.ApplicationStatus
    applicationDate: Date | string
    applicationType: string
    izinStartDate?: Date | string | null
    izinEndDate?: Date | string | null
    ytbScholarshipStatus?: string | null
    foreignReferenceNumber?: string | null
    foreignIdentityNumber: string
    firstName: string
    lastName: string
    fatherName?: string | null
    motherName?: string | null
    gender?: string | null
    placeOfBirth?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    nationality?: string | null
    passportType?: string | null
    passportNumber?: string | null
    passportExpiryDate?: Date | string | null
    passportRemainingPeriod?: string | null
    residenceAddress?: string | null
    email: string
    phoneNumber: string
    motherLanguage?: string | null
    turkishLevel?: string | null
    knownLanguages?: string | null
    educationLevel?: string | null
    specializationField?: string | null
    graduatedSchoolName?: string | null
    diplomaProfession?: string | null
    jobTitle?: string | null
    jobDescription?: string | null
    employmentReason?: string | null
    employmentType?: string | null
    employmentDuration?: string | null
    permitType?: string | null
    grossSalary?: string | null
    isCompanyPartner: boolean
    isPremiumAbroad?: boolean | null
    isHomeServiceJob?: boolean | null
    isTechRequired?: boolean | null
    isTubitakEmployee?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationHistoryCreateManyUserInput = {
    id?: number
    applicationId: number
    action: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type ApplicationWorkflowCreateManyCurrentUserInput = {
    id?: number
    applicationId: number
    assignedAt?: Date | string
  }

  export type ApplicationUpdateWithoutApplicantInput = {
    applicationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ApplicationDocumentsUpdateOneWithoutApplicationNestedInput
    employerInfo?: EmployerInfoUpdateOneWithoutApplicationNestedInput
    histories?: ApplicationHistoryUpdateManyWithoutApplicationNestedInput
    workflow?: ApplicationWorkflowUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ApplicationDocumentsUncheckedUpdateOneWithoutApplicationNestedInput
    employerInfo?: EmployerInfoUncheckedUpdateOneWithoutApplicationNestedInput
    histories?: ApplicationHistoryUncheckedUpdateManyWithoutApplicationNestedInput
    workflow?: ApplicationWorkflowUncheckedUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationType?: StringFieldUpdateOperationsInput | string
    izinStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    izinEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ytbScholarshipStatus?: NullableStringFieldUpdateOperationsInput | string | null
    foreignReferenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    foreignIdentityNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    placeOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportType?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportRemainingPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    residenceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    motherLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    turkishLevel?: NullableStringFieldUpdateOperationsInput | string | null
    knownLanguages?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    specializationField?: NullableStringFieldUpdateOperationsInput | string | null
    graduatedSchoolName?: NullableStringFieldUpdateOperationsInput | string | null
    diplomaProfession?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    employmentReason?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    employmentDuration?: NullableStringFieldUpdateOperationsInput | string | null
    permitType?: NullableStringFieldUpdateOperationsInput | string | null
    grossSalary?: NullableStringFieldUpdateOperationsInput | string | null
    isCompanyPartner?: BoolFieldUpdateOperationsInput | boolean
    isPremiumAbroad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHomeServiceJob?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTechRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTubitakEmployee?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationHistoryUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type ApplicationHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationWorkflowUpdateWithoutCurrentUserInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutWorkflowNestedInput
  }

  export type ApplicationWorkflowUncheckedUpdateWithoutCurrentUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationWorkflowUncheckedUpdateManyWithoutCurrentUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationHistoryCreateManyApplicationInput = {
    id?: number
    userId: number
    action: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type ApplicationHistoryUpdateWithoutApplicationInput = {
    action?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationHistoriesNestedInput
  }

  export type ApplicationHistoryUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationHistoryUncheckedUpdateManyWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}