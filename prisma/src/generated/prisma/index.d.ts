
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
 * Model Merchant
 * 
 */
export type Merchant = $Result.DefaultSelection<Prisma.$MerchantPayload>
/**
 * Model Checkin
 * 
 */
export type Checkin = $Result.DefaultSelection<Prisma.$CheckinPayload>
/**
 * Model Reward
 * 
 */
export type Reward = $Result.DefaultSelection<Prisma.$RewardPayload>
/**
 * Model MerchantReferrals
 * 
 */
export type MerchantReferrals = $Result.DefaultSelection<Prisma.$MerchantReferralsPayload>

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.merchant`: Exposes CRUD operations for the **Merchant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merchants
    * const merchants = await prisma.merchant.findMany()
    * ```
    */
  get merchant(): Prisma.MerchantDelegate<ExtArgs>;

  /**
   * `prisma.checkin`: Exposes CRUD operations for the **Checkin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checkins
    * const checkins = await prisma.checkin.findMany()
    * ```
    */
  get checkin(): Prisma.CheckinDelegate<ExtArgs>;

  /**
   * `prisma.reward`: Exposes CRUD operations for the **Reward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rewards
    * const rewards = await prisma.reward.findMany()
    * ```
    */
  get reward(): Prisma.RewardDelegate<ExtArgs>;

  /**
   * `prisma.merchantReferrals`: Exposes CRUD operations for the **MerchantReferrals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MerchantReferrals
    * const merchantReferrals = await prisma.merchantReferrals.findMany()
    * ```
    */
  get merchantReferrals(): Prisma.MerchantReferralsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Merchant: 'Merchant',
    Checkin: 'Checkin',
    Reward: 'Reward',
    MerchantReferrals: 'MerchantReferrals'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "merchant" | "checkin" | "reward" | "merchantReferrals"
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
      Merchant: {
        payload: Prisma.$MerchantPayload<ExtArgs>
        fields: Prisma.MerchantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerchantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerchantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findFirst: {
            args: Prisma.MerchantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerchantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findMany: {
            args: Prisma.MerchantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          create: {
            args: Prisma.MerchantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          createMany: {
            args: Prisma.MerchantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerchantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          delete: {
            args: Prisma.MerchantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          update: {
            args: Prisma.MerchantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          deleteMany: {
            args: Prisma.MerchantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerchantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MerchantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          aggregate: {
            args: Prisma.MerchantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchant>
          }
          groupBy: {
            args: Prisma.MerchantGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerchantCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantCountAggregateOutputType> | number
          }
        }
      }
      Checkin: {
        payload: Prisma.$CheckinPayload<ExtArgs>
        fields: Prisma.CheckinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          findFirst: {
            args: Prisma.CheckinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          findMany: {
            args: Prisma.CheckinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>[]
          }
          create: {
            args: Prisma.CheckinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          createMany: {
            args: Prisma.CheckinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>[]
          }
          delete: {
            args: Prisma.CheckinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          update: {
            args: Prisma.CheckinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          deleteMany: {
            args: Prisma.CheckinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CheckinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          aggregate: {
            args: Prisma.CheckinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckin>
          }
          groupBy: {
            args: Prisma.CheckinGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckinGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckinCountArgs<ExtArgs>
            result: $Utils.Optional<CheckinCountAggregateOutputType> | number
          }
        }
      }
      Reward: {
        payload: Prisma.$RewardPayload<ExtArgs>
        fields: Prisma.RewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findFirst: {
            args: Prisma.RewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findMany: {
            args: Prisma.RewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          create: {
            args: Prisma.RewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          createMany: {
            args: Prisma.RewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          delete: {
            args: Prisma.RewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          update: {
            args: Prisma.RewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          deleteMany: {
            args: Prisma.RewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          aggregate: {
            args: Prisma.RewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReward>
          }
          groupBy: {
            args: Prisma.RewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardCountArgs<ExtArgs>
            result: $Utils.Optional<RewardCountAggregateOutputType> | number
          }
        }
      }
      MerchantReferrals: {
        payload: Prisma.$MerchantReferralsPayload<ExtArgs>
        fields: Prisma.MerchantReferralsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerchantReferralsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantReferralsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerchantReferralsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantReferralsPayload>
          }
          findFirst: {
            args: Prisma.MerchantReferralsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantReferralsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerchantReferralsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantReferralsPayload>
          }
          findMany: {
            args: Prisma.MerchantReferralsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantReferralsPayload>[]
          }
          create: {
            args: Prisma.MerchantReferralsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantReferralsPayload>
          }
          createMany: {
            args: Prisma.MerchantReferralsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerchantReferralsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantReferralsPayload>[]
          }
          delete: {
            args: Prisma.MerchantReferralsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantReferralsPayload>
          }
          update: {
            args: Prisma.MerchantReferralsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantReferralsPayload>
          }
          deleteMany: {
            args: Prisma.MerchantReferralsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerchantReferralsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MerchantReferralsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantReferralsPayload>
          }
          aggregate: {
            args: Prisma.MerchantReferralsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchantReferrals>
          }
          groupBy: {
            args: Prisma.MerchantReferralsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantReferralsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerchantReferralsCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantReferralsCountAggregateOutputType> | number
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
    checkins: number
    rewards: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkins?: boolean | UserCountOutputTypeCountCheckinsArgs
    rewards?: boolean | UserCountOutputTypeCountRewardsArgs
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
  export type UserCountOutputTypeCountCheckinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardWhereInput
  }


  /**
   * Count Type MerchantCountOutputType
   */

  export type MerchantCountOutputType = {
    checkins: number
    rewards: number
    referringTo: number
    referredBy: number
  }

  export type MerchantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkins?: boolean | MerchantCountOutputTypeCountCheckinsArgs
    rewards?: boolean | MerchantCountOutputTypeCountRewardsArgs
    referringTo?: boolean | MerchantCountOutputTypeCountReferringToArgs
    referredBy?: boolean | MerchantCountOutputTypeCountReferredByArgs
  }

  // Custom InputTypes
  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCountOutputType
     */
    select?: MerchantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountCheckinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountReferringToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantReferralsWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountReferredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantReferralsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    phoneNumber: string | null
    birthday: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phoneNumber: string | null
    birthday: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    birthday: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    birthday?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    birthday?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    birthday?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    phoneNumber: string
    birthday: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    phoneNumber?: boolean
    birthday?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    checkins?: boolean | User$checkinsArgs<ExtArgs>
    rewards?: boolean | User$rewardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    birthday?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    birthday?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkins?: boolean | User$checkinsArgs<ExtArgs>
    rewards?: boolean | User$rewardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      checkins: Prisma.$CheckinPayload<ExtArgs>[]
      rewards: Prisma.$RewardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phoneNumber: string
      birthday: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checkins<T extends User$checkinsArgs<ExtArgs> = {}>(args?: Subset<T, User$checkinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findMany"> | Null>
    rewards<T extends User$rewardsArgs<ExtArgs> = {}>(args?: Subset<T, User$rewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly birthday: FieldRef<"User", 'DateTime'>
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
    skipDuplicates?: boolean
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
  }

  /**
   * User.checkins
   */
  export type User$checkinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    where?: CheckinWhereInput
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    cursor?: CheckinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * User.rewards
   */
  export type User$rewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    where?: RewardWhereInput
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    cursor?: RewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Merchant
   */

  export type AggregateMerchant = {
    _count: MerchantCountAggregateOutputType | null
    _avg: MerchantAvgAggregateOutputType | null
    _sum: MerchantSumAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  export type MerchantAvgAggregateOutputType = {
    rewardGoal: number | null
  }

  export type MerchantSumAggregateOutputType = {
    rewardGoal: number | null
  }

  export type MerchantMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    nfcTagId: string | null
    rewardGoal: number | null
    rewardDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MerchantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    nfcTagId: string | null
    rewardGoal: number | null
    rewardDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MerchantCountAggregateOutputType = {
    id: number
    name: number
    location: number
    nfcTagId: number
    rewardGoal: number
    rewardDescription: number
    activePromos: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MerchantAvgAggregateInputType = {
    rewardGoal?: true
  }

  export type MerchantSumAggregateInputType = {
    rewardGoal?: true
  }

  export type MerchantMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    nfcTagId?: true
    rewardGoal?: true
    rewardDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MerchantMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    nfcTagId?: true
    rewardGoal?: true
    rewardDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MerchantCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    nfcTagId?: true
    rewardGoal?: true
    rewardDescription?: true
    activePromos?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MerchantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchant to aggregate.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Merchants
    **/
    _count?: true | MerchantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MerchantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MerchantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantMaxAggregateInputType
  }

  export type GetMerchantAggregateType<T extends MerchantAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchant[P]>
      : GetScalarType<T[P], AggregateMerchant[P]>
  }




  export type MerchantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantWhereInput
    orderBy?: MerchantOrderByWithAggregationInput | MerchantOrderByWithAggregationInput[]
    by: MerchantScalarFieldEnum[] | MerchantScalarFieldEnum
    having?: MerchantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantCountAggregateInputType | true
    _avg?: MerchantAvgAggregateInputType
    _sum?: MerchantSumAggregateInputType
    _min?: MerchantMinAggregateInputType
    _max?: MerchantMaxAggregateInputType
  }

  export type MerchantGroupByOutputType = {
    id: string
    name: string
    location: string
    nfcTagId: string
    rewardGoal: number
    rewardDescription: string
    activePromos: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: MerchantCountAggregateOutputType | null
    _avg: MerchantAvgAggregateOutputType | null
    _sum: MerchantSumAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  type GetMerchantGroupByPayload<T extends MerchantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantGroupByOutputType[P]>
        }
      >
    >


  export type MerchantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    nfcTagId?: boolean
    rewardGoal?: boolean
    rewardDescription?: boolean
    activePromos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    checkins?: boolean | Merchant$checkinsArgs<ExtArgs>
    rewards?: boolean | Merchant$rewardsArgs<ExtArgs>
    referringTo?: boolean | Merchant$referringToArgs<ExtArgs>
    referredBy?: boolean | Merchant$referredByArgs<ExtArgs>
    _count?: boolean | MerchantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    nfcTagId?: boolean
    rewardGoal?: boolean
    rewardDescription?: boolean
    activePromos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    nfcTagId?: boolean
    rewardGoal?: boolean
    rewardDescription?: boolean
    activePromos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MerchantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkins?: boolean | Merchant$checkinsArgs<ExtArgs>
    rewards?: boolean | Merchant$rewardsArgs<ExtArgs>
    referringTo?: boolean | Merchant$referringToArgs<ExtArgs>
    referredBy?: boolean | Merchant$referredByArgs<ExtArgs>
    _count?: boolean | MerchantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MerchantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MerchantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Merchant"
    objects: {
      checkins: Prisma.$CheckinPayload<ExtArgs>[]
      rewards: Prisma.$RewardPayload<ExtArgs>[]
      referringTo: Prisma.$MerchantReferralsPayload<ExtArgs>[]
      referredBy: Prisma.$MerchantReferralsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      nfcTagId: string
      rewardGoal: number
      rewardDescription: string
      activePromos: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["merchant"]>
    composites: {}
  }

  type MerchantGetPayload<S extends boolean | null | undefined | MerchantDefaultArgs> = $Result.GetResult<Prisma.$MerchantPayload, S>

  type MerchantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MerchantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MerchantCountAggregateInputType | true
    }

  export interface MerchantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Merchant'], meta: { name: 'Merchant' } }
    /**
     * Find zero or one Merchant that matches the filter.
     * @param {MerchantFindUniqueArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerchantFindUniqueArgs>(args: SelectSubset<T, MerchantFindUniqueArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Merchant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MerchantFindUniqueOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerchantFindUniqueOrThrowArgs>(args: SelectSubset<T, MerchantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Merchant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerchantFindFirstArgs>(args?: SelectSubset<T, MerchantFindFirstArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Merchant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerchantFindFirstOrThrowArgs>(args?: SelectSubset<T, MerchantFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Merchants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merchants
     * const merchants = await prisma.merchant.findMany()
     * 
     * // Get first 10 Merchants
     * const merchants = await prisma.merchant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merchantWithIdOnly = await prisma.merchant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerchantFindManyArgs>(args?: SelectSubset<T, MerchantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Merchant.
     * @param {MerchantCreateArgs} args - Arguments to create a Merchant.
     * @example
     * // Create one Merchant
     * const Merchant = await prisma.merchant.create({
     *   data: {
     *     // ... data to create a Merchant
     *   }
     * })
     * 
     */
    create<T extends MerchantCreateArgs>(args: SelectSubset<T, MerchantCreateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Merchants.
     * @param {MerchantCreateManyArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerchantCreateManyArgs>(args?: SelectSubset<T, MerchantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Merchants and returns the data saved in the database.
     * @param {MerchantCreateManyAndReturnArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerchantCreateManyAndReturnArgs>(args?: SelectSubset<T, MerchantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Merchant.
     * @param {MerchantDeleteArgs} args - Arguments to delete one Merchant.
     * @example
     * // Delete one Merchant
     * const Merchant = await prisma.merchant.delete({
     *   where: {
     *     // ... filter to delete one Merchant
     *   }
     * })
     * 
     */
    delete<T extends MerchantDeleteArgs>(args: SelectSubset<T, MerchantDeleteArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Merchant.
     * @param {MerchantUpdateArgs} args - Arguments to update one Merchant.
     * @example
     * // Update one Merchant
     * const merchant = await prisma.merchant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerchantUpdateArgs>(args: SelectSubset<T, MerchantUpdateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Merchants.
     * @param {MerchantDeleteManyArgs} args - Arguments to filter Merchants to delete.
     * @example
     * // Delete a few Merchants
     * const { count } = await prisma.merchant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerchantDeleteManyArgs>(args?: SelectSubset<T, MerchantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerchantUpdateManyArgs>(args: SelectSubset<T, MerchantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Merchant.
     * @param {MerchantUpsertArgs} args - Arguments to update or create a Merchant.
     * @example
     * // Update or create a Merchant
     * const merchant = await prisma.merchant.upsert({
     *   create: {
     *     // ... data to create a Merchant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merchant we want to update
     *   }
     * })
     */
    upsert<T extends MerchantUpsertArgs>(args: SelectSubset<T, MerchantUpsertArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCountArgs} args - Arguments to filter Merchants to count.
     * @example
     * // Count the number of Merchants
     * const count = await prisma.merchant.count({
     *   where: {
     *     // ... the filter for the Merchants we want to count
     *   }
     * })
    **/
    count<T extends MerchantCountArgs>(
      args?: Subset<T, MerchantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MerchantAggregateArgs>(args: Subset<T, MerchantAggregateArgs>): Prisma.PrismaPromise<GetMerchantAggregateType<T>>

    /**
     * Group by Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantGroupByArgs} args - Group by arguments.
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
      T extends MerchantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerchantGroupByArgs['orderBy'] }
        : { orderBy?: MerchantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MerchantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Merchant model
   */
  readonly fields: MerchantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Merchant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerchantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checkins<T extends Merchant$checkinsArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$checkinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findMany"> | Null>
    rewards<T extends Merchant$rewardsArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$rewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findMany"> | Null>
    referringTo<T extends Merchant$referringToArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$referringToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantReferralsPayload<ExtArgs>, T, "findMany"> | Null>
    referredBy<T extends Merchant$referredByArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$referredByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantReferralsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Merchant model
   */ 
  interface MerchantFieldRefs {
    readonly id: FieldRef<"Merchant", 'String'>
    readonly name: FieldRef<"Merchant", 'String'>
    readonly location: FieldRef<"Merchant", 'String'>
    readonly nfcTagId: FieldRef<"Merchant", 'String'>
    readonly rewardGoal: FieldRef<"Merchant", 'Int'>
    readonly rewardDescription: FieldRef<"Merchant", 'String'>
    readonly activePromos: FieldRef<"Merchant", 'Json'>
    readonly createdAt: FieldRef<"Merchant", 'DateTime'>
    readonly updatedAt: FieldRef<"Merchant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Merchant findUnique
   */
  export type MerchantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findUniqueOrThrow
   */
  export type MerchantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findFirst
   */
  export type MerchantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findFirstOrThrow
   */
  export type MerchantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findMany
   */
  export type MerchantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchants to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant create
   */
  export type MerchantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The data needed to create a Merchant.
     */
    data: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
  }

  /**
   * Merchant createMany
   */
  export type MerchantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant createManyAndReturn
   */
  export type MerchantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant update
   */
  export type MerchantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The data needed to update a Merchant.
     */
    data: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
    /**
     * Choose, which Merchant to update.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant updateMany
   */
  export type MerchantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Merchants.
     */
    data: XOR<MerchantUpdateManyMutationInput, MerchantUncheckedUpdateManyInput>
    /**
     * Filter which Merchants to update
     */
    where?: MerchantWhereInput
  }

  /**
   * Merchant upsert
   */
  export type MerchantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The filter to search for the Merchant to update in case it exists.
     */
    where: MerchantWhereUniqueInput
    /**
     * In case the Merchant found by the `where` argument doesn't exist, create a new Merchant with this data.
     */
    create: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
    /**
     * In case the Merchant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
  }

  /**
   * Merchant delete
   */
  export type MerchantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter which Merchant to delete.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant deleteMany
   */
  export type MerchantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchants to delete
     */
    where?: MerchantWhereInput
  }

  /**
   * Merchant.checkins
   */
  export type Merchant$checkinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    where?: CheckinWhereInput
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    cursor?: CheckinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Merchant.rewards
   */
  export type Merchant$rewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    where?: RewardWhereInput
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    cursor?: RewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Merchant.referringTo
   */
  export type Merchant$referringToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantReferrals
     */
    select?: MerchantReferralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantReferralsInclude<ExtArgs> | null
    where?: MerchantReferralsWhereInput
    orderBy?: MerchantReferralsOrderByWithRelationInput | MerchantReferralsOrderByWithRelationInput[]
    cursor?: MerchantReferralsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MerchantReferralsScalarFieldEnum | MerchantReferralsScalarFieldEnum[]
  }

  /**
   * Merchant.referredBy
   */
  export type Merchant$referredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantReferrals
     */
    select?: MerchantReferralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantReferralsInclude<ExtArgs> | null
    where?: MerchantReferralsWhereInput
    orderBy?: MerchantReferralsOrderByWithRelationInput | MerchantReferralsOrderByWithRelationInput[]
    cursor?: MerchantReferralsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MerchantReferralsScalarFieldEnum | MerchantReferralsScalarFieldEnum[]
  }

  /**
   * Merchant without action
   */
  export type MerchantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
  }


  /**
   * Model Checkin
   */

  export type AggregateCheckin = {
    _count: CheckinCountAggregateOutputType | null
    _min: CheckinMinAggregateOutputType | null
    _max: CheckinMaxAggregateOutputType | null
  }

  export type CheckinMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    userId: string | null
    merchantId: string | null
  }

  export type CheckinMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    userId: string | null
    merchantId: string | null
  }

  export type CheckinCountAggregateOutputType = {
    id: number
    timestamp: number
    userId: number
    merchantId: number
    _all: number
  }


  export type CheckinMinAggregateInputType = {
    id?: true
    timestamp?: true
    userId?: true
    merchantId?: true
  }

  export type CheckinMaxAggregateInputType = {
    id?: true
    timestamp?: true
    userId?: true
    merchantId?: true
  }

  export type CheckinCountAggregateInputType = {
    id?: true
    timestamp?: true
    userId?: true
    merchantId?: true
    _all?: true
  }

  export type CheckinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkin to aggregate.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checkins
    **/
    _count?: true | CheckinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckinMaxAggregateInputType
  }

  export type GetCheckinAggregateType<T extends CheckinAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckin[P]>
      : GetScalarType<T[P], AggregateCheckin[P]>
  }




  export type CheckinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinWhereInput
    orderBy?: CheckinOrderByWithAggregationInput | CheckinOrderByWithAggregationInput[]
    by: CheckinScalarFieldEnum[] | CheckinScalarFieldEnum
    having?: CheckinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckinCountAggregateInputType | true
    _min?: CheckinMinAggregateInputType
    _max?: CheckinMaxAggregateInputType
  }

  export type CheckinGroupByOutputType = {
    id: string
    timestamp: Date
    userId: string
    merchantId: string
    _count: CheckinCountAggregateOutputType | null
    _min: CheckinMinAggregateOutputType | null
    _max: CheckinMaxAggregateOutputType | null
  }

  type GetCheckinGroupByPayload<T extends CheckinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckinGroupByOutputType[P]>
            : GetScalarType<T[P], CheckinGroupByOutputType[P]>
        }
      >
    >


  export type CheckinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    userId?: boolean
    merchantId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkin"]>

  export type CheckinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    userId?: boolean
    merchantId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkin"]>

  export type CheckinSelectScalar = {
    id?: boolean
    timestamp?: boolean
    userId?: boolean
    merchantId?: boolean
  }

  export type CheckinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type CheckinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $CheckinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checkin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      userId: string
      merchantId: string
    }, ExtArgs["result"]["checkin"]>
    composites: {}
  }

  type CheckinGetPayload<S extends boolean | null | undefined | CheckinDefaultArgs> = $Result.GetResult<Prisma.$CheckinPayload, S>

  type CheckinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CheckinFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CheckinCountAggregateInputType | true
    }

  export interface CheckinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checkin'], meta: { name: 'Checkin' } }
    /**
     * Find zero or one Checkin that matches the filter.
     * @param {CheckinFindUniqueArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckinFindUniqueArgs>(args: SelectSubset<T, CheckinFindUniqueArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Checkin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CheckinFindUniqueOrThrowArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckinFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Checkin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinFindFirstArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckinFindFirstArgs>(args?: SelectSubset<T, CheckinFindFirstArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Checkin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinFindFirstOrThrowArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckinFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckinFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Checkins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checkins
     * const checkins = await prisma.checkin.findMany()
     * 
     * // Get first 10 Checkins
     * const checkins = await prisma.checkin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkinWithIdOnly = await prisma.checkin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckinFindManyArgs>(args?: SelectSubset<T, CheckinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Checkin.
     * @param {CheckinCreateArgs} args - Arguments to create a Checkin.
     * @example
     * // Create one Checkin
     * const Checkin = await prisma.checkin.create({
     *   data: {
     *     // ... data to create a Checkin
     *   }
     * })
     * 
     */
    create<T extends CheckinCreateArgs>(args: SelectSubset<T, CheckinCreateArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Checkins.
     * @param {CheckinCreateManyArgs} args - Arguments to create many Checkins.
     * @example
     * // Create many Checkins
     * const checkin = await prisma.checkin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckinCreateManyArgs>(args?: SelectSubset<T, CheckinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checkins and returns the data saved in the database.
     * @param {CheckinCreateManyAndReturnArgs} args - Arguments to create many Checkins.
     * @example
     * // Create many Checkins
     * const checkin = await prisma.checkin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checkins and only return the `id`
     * const checkinWithIdOnly = await prisma.checkin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckinCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Checkin.
     * @param {CheckinDeleteArgs} args - Arguments to delete one Checkin.
     * @example
     * // Delete one Checkin
     * const Checkin = await prisma.checkin.delete({
     *   where: {
     *     // ... filter to delete one Checkin
     *   }
     * })
     * 
     */
    delete<T extends CheckinDeleteArgs>(args: SelectSubset<T, CheckinDeleteArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Checkin.
     * @param {CheckinUpdateArgs} args - Arguments to update one Checkin.
     * @example
     * // Update one Checkin
     * const checkin = await prisma.checkin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckinUpdateArgs>(args: SelectSubset<T, CheckinUpdateArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Checkins.
     * @param {CheckinDeleteManyArgs} args - Arguments to filter Checkins to delete.
     * @example
     * // Delete a few Checkins
     * const { count } = await prisma.checkin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckinDeleteManyArgs>(args?: SelectSubset<T, CheckinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checkins
     * const checkin = await prisma.checkin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckinUpdateManyArgs>(args: SelectSubset<T, CheckinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Checkin.
     * @param {CheckinUpsertArgs} args - Arguments to update or create a Checkin.
     * @example
     * // Update or create a Checkin
     * const checkin = await prisma.checkin.upsert({
     *   create: {
     *     // ... data to create a Checkin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checkin we want to update
     *   }
     * })
     */
    upsert<T extends CheckinUpsertArgs>(args: SelectSubset<T, CheckinUpsertArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinCountArgs} args - Arguments to filter Checkins to count.
     * @example
     * // Count the number of Checkins
     * const count = await prisma.checkin.count({
     *   where: {
     *     // ... the filter for the Checkins we want to count
     *   }
     * })
    **/
    count<T extends CheckinCountArgs>(
      args?: Subset<T, CheckinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checkin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckinAggregateArgs>(args: Subset<T, CheckinAggregateArgs>): Prisma.PrismaPromise<GetCheckinAggregateType<T>>

    /**
     * Group by Checkin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinGroupByArgs} args - Group by arguments.
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
      T extends CheckinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckinGroupByArgs['orderBy'] }
        : { orderBy?: CheckinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checkin model
   */
  readonly fields: CheckinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checkin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Checkin model
   */ 
  interface CheckinFieldRefs {
    readonly id: FieldRef<"Checkin", 'String'>
    readonly timestamp: FieldRef<"Checkin", 'DateTime'>
    readonly userId: FieldRef<"Checkin", 'String'>
    readonly merchantId: FieldRef<"Checkin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Checkin findUnique
   */
  export type CheckinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin findUniqueOrThrow
   */
  export type CheckinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin findFirst
   */
  export type CheckinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkins.
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkins.
     */
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Checkin findFirstOrThrow
   */
  export type CheckinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkins.
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkins.
     */
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Checkin findMany
   */
  export type CheckinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkins to fetch.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checkins.
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Checkin create
   */
  export type CheckinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * The data needed to create a Checkin.
     */
    data: XOR<CheckinCreateInput, CheckinUncheckedCreateInput>
  }

  /**
   * Checkin createMany
   */
  export type CheckinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checkins.
     */
    data: CheckinCreateManyInput | CheckinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checkin createManyAndReturn
   */
  export type CheckinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Checkins.
     */
    data: CheckinCreateManyInput | CheckinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Checkin update
   */
  export type CheckinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * The data needed to update a Checkin.
     */
    data: XOR<CheckinUpdateInput, CheckinUncheckedUpdateInput>
    /**
     * Choose, which Checkin to update.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin updateMany
   */
  export type CheckinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checkins.
     */
    data: XOR<CheckinUpdateManyMutationInput, CheckinUncheckedUpdateManyInput>
    /**
     * Filter which Checkins to update
     */
    where?: CheckinWhereInput
  }

  /**
   * Checkin upsert
   */
  export type CheckinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * The filter to search for the Checkin to update in case it exists.
     */
    where: CheckinWhereUniqueInput
    /**
     * In case the Checkin found by the `where` argument doesn't exist, create a new Checkin with this data.
     */
    create: XOR<CheckinCreateInput, CheckinUncheckedCreateInput>
    /**
     * In case the Checkin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckinUpdateInput, CheckinUncheckedUpdateInput>
  }

  /**
   * Checkin delete
   */
  export type CheckinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter which Checkin to delete.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin deleteMany
   */
  export type CheckinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkins to delete
     */
    where?: CheckinWhereInput
  }

  /**
   * Checkin without action
   */
  export type CheckinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
  }


  /**
   * Model Reward
   */

  export type AggregateReward = {
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  export type RewardAvgAggregateOutputType = {
    progress: number | null
  }

  export type RewardSumAggregateOutputType = {
    progress: number | null
  }

  export type RewardMinAggregateOutputType = {
    id: string | null
    progress: number | null
    rewardClaimed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    merchantId: string | null
  }

  export type RewardMaxAggregateOutputType = {
    id: string | null
    progress: number | null
    rewardClaimed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    merchantId: string | null
  }

  export type RewardCountAggregateOutputType = {
    id: number
    progress: number
    rewardClaimed: number
    createdAt: number
    updatedAt: number
    userId: number
    merchantId: number
    _all: number
  }


  export type RewardAvgAggregateInputType = {
    progress?: true
  }

  export type RewardSumAggregateInputType = {
    progress?: true
  }

  export type RewardMinAggregateInputType = {
    id?: true
    progress?: true
    rewardClaimed?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    merchantId?: true
  }

  export type RewardMaxAggregateInputType = {
    id?: true
    progress?: true
    rewardClaimed?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    merchantId?: true
  }

  export type RewardCountAggregateInputType = {
    id?: true
    progress?: true
    rewardClaimed?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    merchantId?: true
    _all?: true
  }

  export type RewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reward to aggregate.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rewards
    **/
    _count?: true | RewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RewardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RewardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardMaxAggregateInputType
  }

  export type GetRewardAggregateType<T extends RewardAggregateArgs> = {
        [P in keyof T & keyof AggregateReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReward[P]>
      : GetScalarType<T[P], AggregateReward[P]>
  }




  export type RewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardWhereInput
    orderBy?: RewardOrderByWithAggregationInput | RewardOrderByWithAggregationInput[]
    by: RewardScalarFieldEnum[] | RewardScalarFieldEnum
    having?: RewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardCountAggregateInputType | true
    _avg?: RewardAvgAggregateInputType
    _sum?: RewardSumAggregateInputType
    _min?: RewardMinAggregateInputType
    _max?: RewardMaxAggregateInputType
  }

  export type RewardGroupByOutputType = {
    id: string
    progress: number
    rewardClaimed: boolean
    createdAt: Date
    updatedAt: Date
    userId: string
    merchantId: string
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  type GetRewardGroupByPayload<T extends RewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardGroupByOutputType[P]>
            : GetScalarType<T[P], RewardGroupByOutputType[P]>
        }
      >
    >


  export type RewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    progress?: boolean
    rewardClaimed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    merchantId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    progress?: boolean
    rewardClaimed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    merchantId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectScalar = {
    id?: boolean
    progress?: boolean
    rewardClaimed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    merchantId?: boolean
  }

  export type RewardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type RewardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $RewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reward"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      progress: number
      rewardClaimed: boolean
      createdAt: Date
      updatedAt: Date
      userId: string
      merchantId: string
    }, ExtArgs["result"]["reward"]>
    composites: {}
  }

  type RewardGetPayload<S extends boolean | null | undefined | RewardDefaultArgs> = $Result.GetResult<Prisma.$RewardPayload, S>

  type RewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RewardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RewardCountAggregateInputType | true
    }

  export interface RewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reward'], meta: { name: 'Reward' } }
    /**
     * Find zero or one Reward that matches the filter.
     * @param {RewardFindUniqueArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardFindUniqueArgs>(args: SelectSubset<T, RewardFindUniqueArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reward that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RewardFindUniqueOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardFindFirstArgs>(args?: SelectSubset<T, RewardFindFirstArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rewards
     * const rewards = await prisma.reward.findMany()
     * 
     * // Get first 10 Rewards
     * const rewards = await prisma.reward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardWithIdOnly = await prisma.reward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardFindManyArgs>(args?: SelectSubset<T, RewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reward.
     * @param {RewardCreateArgs} args - Arguments to create a Reward.
     * @example
     * // Create one Reward
     * const Reward = await prisma.reward.create({
     *   data: {
     *     // ... data to create a Reward
     *   }
     * })
     * 
     */
    create<T extends RewardCreateArgs>(args: SelectSubset<T, RewardCreateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rewards.
     * @param {RewardCreateManyArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardCreateManyArgs>(args?: SelectSubset<T, RewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rewards and returns the data saved in the database.
     * @param {RewardCreateManyAndReturnArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reward.
     * @param {RewardDeleteArgs} args - Arguments to delete one Reward.
     * @example
     * // Delete one Reward
     * const Reward = await prisma.reward.delete({
     *   where: {
     *     // ... filter to delete one Reward
     *   }
     * })
     * 
     */
    delete<T extends RewardDeleteArgs>(args: SelectSubset<T, RewardDeleteArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reward.
     * @param {RewardUpdateArgs} args - Arguments to update one Reward.
     * @example
     * // Update one Reward
     * const reward = await prisma.reward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardUpdateArgs>(args: SelectSubset<T, RewardUpdateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rewards.
     * @param {RewardDeleteManyArgs} args - Arguments to filter Rewards to delete.
     * @example
     * // Delete a few Rewards
     * const { count } = await prisma.reward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardDeleteManyArgs>(args?: SelectSubset<T, RewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardUpdateManyArgs>(args: SelectSubset<T, RewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reward.
     * @param {RewardUpsertArgs} args - Arguments to update or create a Reward.
     * @example
     * // Update or create a Reward
     * const reward = await prisma.reward.upsert({
     *   create: {
     *     // ... data to create a Reward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reward we want to update
     *   }
     * })
     */
    upsert<T extends RewardUpsertArgs>(args: SelectSubset<T, RewardUpsertArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardCountArgs} args - Arguments to filter Rewards to count.
     * @example
     * // Count the number of Rewards
     * const count = await prisma.reward.count({
     *   where: {
     *     // ... the filter for the Rewards we want to count
     *   }
     * })
    **/
    count<T extends RewardCountArgs>(
      args?: Subset<T, RewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RewardAggregateArgs>(args: Subset<T, RewardAggregateArgs>): Prisma.PrismaPromise<GetRewardAggregateType<T>>

    /**
     * Group by Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardGroupByArgs} args - Group by arguments.
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
      T extends RewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardGroupByArgs['orderBy'] }
        : { orderBy?: RewardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reward model
   */
  readonly fields: RewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Reward model
   */ 
  interface RewardFieldRefs {
    readonly id: FieldRef<"Reward", 'String'>
    readonly progress: FieldRef<"Reward", 'Int'>
    readonly rewardClaimed: FieldRef<"Reward", 'Boolean'>
    readonly createdAt: FieldRef<"Reward", 'DateTime'>
    readonly updatedAt: FieldRef<"Reward", 'DateTime'>
    readonly userId: FieldRef<"Reward", 'String'>
    readonly merchantId: FieldRef<"Reward", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reward findUnique
   */
  export type RewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findUniqueOrThrow
   */
  export type RewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findFirst
   */
  export type RewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findFirstOrThrow
   */
  export type RewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findMany
   */
  export type RewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward create
   */
  export type RewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to create a Reward.
     */
    data: XOR<RewardCreateInput, RewardUncheckedCreateInput>
  }

  /**
   * Reward createMany
   */
  export type RewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reward createManyAndReturn
   */
  export type RewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reward update
   */
  export type RewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to update a Reward.
     */
    data: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
    /**
     * Choose, which Reward to update.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward updateMany
   */
  export type RewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
  }

  /**
   * Reward upsert
   */
  export type RewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The filter to search for the Reward to update in case it exists.
     */
    where: RewardWhereUniqueInput
    /**
     * In case the Reward found by the `where` argument doesn't exist, create a new Reward with this data.
     */
    create: XOR<RewardCreateInput, RewardUncheckedCreateInput>
    /**
     * In case the Reward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
  }

  /**
   * Reward delete
   */
  export type RewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter which Reward to delete.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward deleteMany
   */
  export type RewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rewards to delete
     */
    where?: RewardWhereInput
  }

  /**
   * Reward without action
   */
  export type RewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
  }


  /**
   * Model MerchantReferrals
   */

  export type AggregateMerchantReferrals = {
    _count: MerchantReferralsCountAggregateOutputType | null
    _min: MerchantReferralsMinAggregateOutputType | null
    _max: MerchantReferralsMaxAggregateOutputType | null
  }

  export type MerchantReferralsMinAggregateOutputType = {
    id: string | null
    referringToId: string | null
    referredById: string | null
    referralCode: string | null
    createdAt: Date | null
  }

  export type MerchantReferralsMaxAggregateOutputType = {
    id: string | null
    referringToId: string | null
    referredById: string | null
    referralCode: string | null
    createdAt: Date | null
  }

  export type MerchantReferralsCountAggregateOutputType = {
    id: number
    referringToId: number
    referredById: number
    referralCode: number
    createdAt: number
    _all: number
  }


  export type MerchantReferralsMinAggregateInputType = {
    id?: true
    referringToId?: true
    referredById?: true
    referralCode?: true
    createdAt?: true
  }

  export type MerchantReferralsMaxAggregateInputType = {
    id?: true
    referringToId?: true
    referredById?: true
    referralCode?: true
    createdAt?: true
  }

  export type MerchantReferralsCountAggregateInputType = {
    id?: true
    referringToId?: true
    referredById?: true
    referralCode?: true
    createdAt?: true
    _all?: true
  }

  export type MerchantReferralsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MerchantReferrals to aggregate.
     */
    where?: MerchantReferralsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchantReferrals to fetch.
     */
    orderBy?: MerchantReferralsOrderByWithRelationInput | MerchantReferralsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerchantReferralsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchantReferrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchantReferrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MerchantReferrals
    **/
    _count?: true | MerchantReferralsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantReferralsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantReferralsMaxAggregateInputType
  }

  export type GetMerchantReferralsAggregateType<T extends MerchantReferralsAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchantReferrals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchantReferrals[P]>
      : GetScalarType<T[P], AggregateMerchantReferrals[P]>
  }




  export type MerchantReferralsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantReferralsWhereInput
    orderBy?: MerchantReferralsOrderByWithAggregationInput | MerchantReferralsOrderByWithAggregationInput[]
    by: MerchantReferralsScalarFieldEnum[] | MerchantReferralsScalarFieldEnum
    having?: MerchantReferralsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantReferralsCountAggregateInputType | true
    _min?: MerchantReferralsMinAggregateInputType
    _max?: MerchantReferralsMaxAggregateInputType
  }

  export type MerchantReferralsGroupByOutputType = {
    id: string
    referringToId: string
    referredById: string
    referralCode: string
    createdAt: Date
    _count: MerchantReferralsCountAggregateOutputType | null
    _min: MerchantReferralsMinAggregateOutputType | null
    _max: MerchantReferralsMaxAggregateOutputType | null
  }

  type GetMerchantReferralsGroupByPayload<T extends MerchantReferralsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantReferralsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantReferralsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantReferralsGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantReferralsGroupByOutputType[P]>
        }
      >
    >


  export type MerchantReferralsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referringToId?: boolean
    referredById?: boolean
    referralCode?: boolean
    createdAt?: boolean
    referringTo?: boolean | MerchantDefaultArgs<ExtArgs>
    referredBy?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchantReferrals"]>

  export type MerchantReferralsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referringToId?: boolean
    referredById?: boolean
    referralCode?: boolean
    createdAt?: boolean
    referringTo?: boolean | MerchantDefaultArgs<ExtArgs>
    referredBy?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchantReferrals"]>

  export type MerchantReferralsSelectScalar = {
    id?: boolean
    referringToId?: boolean
    referredById?: boolean
    referralCode?: boolean
    createdAt?: boolean
  }

  export type MerchantReferralsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referringTo?: boolean | MerchantDefaultArgs<ExtArgs>
    referredBy?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type MerchantReferralsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referringTo?: boolean | MerchantDefaultArgs<ExtArgs>
    referredBy?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $MerchantReferralsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MerchantReferrals"
    objects: {
      referringTo: Prisma.$MerchantPayload<ExtArgs>
      referredBy: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referringToId: string
      referredById: string
      referralCode: string
      createdAt: Date
    }, ExtArgs["result"]["merchantReferrals"]>
    composites: {}
  }

  type MerchantReferralsGetPayload<S extends boolean | null | undefined | MerchantReferralsDefaultArgs> = $Result.GetResult<Prisma.$MerchantReferralsPayload, S>

  type MerchantReferralsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MerchantReferralsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MerchantReferralsCountAggregateInputType | true
    }

  export interface MerchantReferralsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MerchantReferrals'], meta: { name: 'MerchantReferrals' } }
    /**
     * Find zero or one MerchantReferrals that matches the filter.
     * @param {MerchantReferralsFindUniqueArgs} args - Arguments to find a MerchantReferrals
     * @example
     * // Get one MerchantReferrals
     * const merchantReferrals = await prisma.merchantReferrals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerchantReferralsFindUniqueArgs>(args: SelectSubset<T, MerchantReferralsFindUniqueArgs<ExtArgs>>): Prisma__MerchantReferralsClient<$Result.GetResult<Prisma.$MerchantReferralsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MerchantReferrals that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MerchantReferralsFindUniqueOrThrowArgs} args - Arguments to find a MerchantReferrals
     * @example
     * // Get one MerchantReferrals
     * const merchantReferrals = await prisma.merchantReferrals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerchantReferralsFindUniqueOrThrowArgs>(args: SelectSubset<T, MerchantReferralsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerchantReferralsClient<$Result.GetResult<Prisma.$MerchantReferralsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MerchantReferrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantReferralsFindFirstArgs} args - Arguments to find a MerchantReferrals
     * @example
     * // Get one MerchantReferrals
     * const merchantReferrals = await prisma.merchantReferrals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerchantReferralsFindFirstArgs>(args?: SelectSubset<T, MerchantReferralsFindFirstArgs<ExtArgs>>): Prisma__MerchantReferralsClient<$Result.GetResult<Prisma.$MerchantReferralsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MerchantReferrals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantReferralsFindFirstOrThrowArgs} args - Arguments to find a MerchantReferrals
     * @example
     * // Get one MerchantReferrals
     * const merchantReferrals = await prisma.merchantReferrals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerchantReferralsFindFirstOrThrowArgs>(args?: SelectSubset<T, MerchantReferralsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerchantReferralsClient<$Result.GetResult<Prisma.$MerchantReferralsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MerchantReferrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantReferralsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MerchantReferrals
     * const merchantReferrals = await prisma.merchantReferrals.findMany()
     * 
     * // Get first 10 MerchantReferrals
     * const merchantReferrals = await prisma.merchantReferrals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merchantReferralsWithIdOnly = await prisma.merchantReferrals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerchantReferralsFindManyArgs>(args?: SelectSubset<T, MerchantReferralsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantReferralsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MerchantReferrals.
     * @param {MerchantReferralsCreateArgs} args - Arguments to create a MerchantReferrals.
     * @example
     * // Create one MerchantReferrals
     * const MerchantReferrals = await prisma.merchantReferrals.create({
     *   data: {
     *     // ... data to create a MerchantReferrals
     *   }
     * })
     * 
     */
    create<T extends MerchantReferralsCreateArgs>(args: SelectSubset<T, MerchantReferralsCreateArgs<ExtArgs>>): Prisma__MerchantReferralsClient<$Result.GetResult<Prisma.$MerchantReferralsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MerchantReferrals.
     * @param {MerchantReferralsCreateManyArgs} args - Arguments to create many MerchantReferrals.
     * @example
     * // Create many MerchantReferrals
     * const merchantReferrals = await prisma.merchantReferrals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerchantReferralsCreateManyArgs>(args?: SelectSubset<T, MerchantReferralsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MerchantReferrals and returns the data saved in the database.
     * @param {MerchantReferralsCreateManyAndReturnArgs} args - Arguments to create many MerchantReferrals.
     * @example
     * // Create many MerchantReferrals
     * const merchantReferrals = await prisma.merchantReferrals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MerchantReferrals and only return the `id`
     * const merchantReferralsWithIdOnly = await prisma.merchantReferrals.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerchantReferralsCreateManyAndReturnArgs>(args?: SelectSubset<T, MerchantReferralsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantReferralsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MerchantReferrals.
     * @param {MerchantReferralsDeleteArgs} args - Arguments to delete one MerchantReferrals.
     * @example
     * // Delete one MerchantReferrals
     * const MerchantReferrals = await prisma.merchantReferrals.delete({
     *   where: {
     *     // ... filter to delete one MerchantReferrals
     *   }
     * })
     * 
     */
    delete<T extends MerchantReferralsDeleteArgs>(args: SelectSubset<T, MerchantReferralsDeleteArgs<ExtArgs>>): Prisma__MerchantReferralsClient<$Result.GetResult<Prisma.$MerchantReferralsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MerchantReferrals.
     * @param {MerchantReferralsUpdateArgs} args - Arguments to update one MerchantReferrals.
     * @example
     * // Update one MerchantReferrals
     * const merchantReferrals = await prisma.merchantReferrals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerchantReferralsUpdateArgs>(args: SelectSubset<T, MerchantReferralsUpdateArgs<ExtArgs>>): Prisma__MerchantReferralsClient<$Result.GetResult<Prisma.$MerchantReferralsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MerchantReferrals.
     * @param {MerchantReferralsDeleteManyArgs} args - Arguments to filter MerchantReferrals to delete.
     * @example
     * // Delete a few MerchantReferrals
     * const { count } = await prisma.merchantReferrals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerchantReferralsDeleteManyArgs>(args?: SelectSubset<T, MerchantReferralsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MerchantReferrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantReferralsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MerchantReferrals
     * const merchantReferrals = await prisma.merchantReferrals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerchantReferralsUpdateManyArgs>(args: SelectSubset<T, MerchantReferralsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MerchantReferrals.
     * @param {MerchantReferralsUpsertArgs} args - Arguments to update or create a MerchantReferrals.
     * @example
     * // Update or create a MerchantReferrals
     * const merchantReferrals = await prisma.merchantReferrals.upsert({
     *   create: {
     *     // ... data to create a MerchantReferrals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MerchantReferrals we want to update
     *   }
     * })
     */
    upsert<T extends MerchantReferralsUpsertArgs>(args: SelectSubset<T, MerchantReferralsUpsertArgs<ExtArgs>>): Prisma__MerchantReferralsClient<$Result.GetResult<Prisma.$MerchantReferralsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MerchantReferrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantReferralsCountArgs} args - Arguments to filter MerchantReferrals to count.
     * @example
     * // Count the number of MerchantReferrals
     * const count = await prisma.merchantReferrals.count({
     *   where: {
     *     // ... the filter for the MerchantReferrals we want to count
     *   }
     * })
    **/
    count<T extends MerchantReferralsCountArgs>(
      args?: Subset<T, MerchantReferralsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantReferralsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MerchantReferrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantReferralsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MerchantReferralsAggregateArgs>(args: Subset<T, MerchantReferralsAggregateArgs>): Prisma.PrismaPromise<GetMerchantReferralsAggregateType<T>>

    /**
     * Group by MerchantReferrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantReferralsGroupByArgs} args - Group by arguments.
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
      T extends MerchantReferralsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerchantReferralsGroupByArgs['orderBy'] }
        : { orderBy?: MerchantReferralsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MerchantReferralsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantReferralsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MerchantReferrals model
   */
  readonly fields: MerchantReferralsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MerchantReferrals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerchantReferralsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referringTo<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    referredBy<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MerchantReferrals model
   */ 
  interface MerchantReferralsFieldRefs {
    readonly id: FieldRef<"MerchantReferrals", 'String'>
    readonly referringToId: FieldRef<"MerchantReferrals", 'String'>
    readonly referredById: FieldRef<"MerchantReferrals", 'String'>
    readonly referralCode: FieldRef<"MerchantReferrals", 'String'>
    readonly createdAt: FieldRef<"MerchantReferrals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MerchantReferrals findUnique
   */
  export type MerchantReferralsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantReferrals
     */
    select?: MerchantReferralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantReferralsInclude<ExtArgs> | null
    /**
     * Filter, which MerchantReferrals to fetch.
     */
    where: MerchantReferralsWhereUniqueInput
  }

  /**
   * MerchantReferrals findUniqueOrThrow
   */
  export type MerchantReferralsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantReferrals
     */
    select?: MerchantReferralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantReferralsInclude<ExtArgs> | null
    /**
     * Filter, which MerchantReferrals to fetch.
     */
    where: MerchantReferralsWhereUniqueInput
  }

  /**
   * MerchantReferrals findFirst
   */
  export type MerchantReferralsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantReferrals
     */
    select?: MerchantReferralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantReferralsInclude<ExtArgs> | null
    /**
     * Filter, which MerchantReferrals to fetch.
     */
    where?: MerchantReferralsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchantReferrals to fetch.
     */
    orderBy?: MerchantReferralsOrderByWithRelationInput | MerchantReferralsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MerchantReferrals.
     */
    cursor?: MerchantReferralsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchantReferrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchantReferrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MerchantReferrals.
     */
    distinct?: MerchantReferralsScalarFieldEnum | MerchantReferralsScalarFieldEnum[]
  }

  /**
   * MerchantReferrals findFirstOrThrow
   */
  export type MerchantReferralsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantReferrals
     */
    select?: MerchantReferralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantReferralsInclude<ExtArgs> | null
    /**
     * Filter, which MerchantReferrals to fetch.
     */
    where?: MerchantReferralsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchantReferrals to fetch.
     */
    orderBy?: MerchantReferralsOrderByWithRelationInput | MerchantReferralsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MerchantReferrals.
     */
    cursor?: MerchantReferralsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchantReferrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchantReferrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MerchantReferrals.
     */
    distinct?: MerchantReferralsScalarFieldEnum | MerchantReferralsScalarFieldEnum[]
  }

  /**
   * MerchantReferrals findMany
   */
  export type MerchantReferralsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantReferrals
     */
    select?: MerchantReferralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantReferralsInclude<ExtArgs> | null
    /**
     * Filter, which MerchantReferrals to fetch.
     */
    where?: MerchantReferralsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchantReferrals to fetch.
     */
    orderBy?: MerchantReferralsOrderByWithRelationInput | MerchantReferralsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MerchantReferrals.
     */
    cursor?: MerchantReferralsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchantReferrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchantReferrals.
     */
    skip?: number
    distinct?: MerchantReferralsScalarFieldEnum | MerchantReferralsScalarFieldEnum[]
  }

  /**
   * MerchantReferrals create
   */
  export type MerchantReferralsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantReferrals
     */
    select?: MerchantReferralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantReferralsInclude<ExtArgs> | null
    /**
     * The data needed to create a MerchantReferrals.
     */
    data: XOR<MerchantReferralsCreateInput, MerchantReferralsUncheckedCreateInput>
  }

  /**
   * MerchantReferrals createMany
   */
  export type MerchantReferralsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MerchantReferrals.
     */
    data: MerchantReferralsCreateManyInput | MerchantReferralsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MerchantReferrals createManyAndReturn
   */
  export type MerchantReferralsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantReferrals
     */
    select?: MerchantReferralsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MerchantReferrals.
     */
    data: MerchantReferralsCreateManyInput | MerchantReferralsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantReferralsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MerchantReferrals update
   */
  export type MerchantReferralsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantReferrals
     */
    select?: MerchantReferralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantReferralsInclude<ExtArgs> | null
    /**
     * The data needed to update a MerchantReferrals.
     */
    data: XOR<MerchantReferralsUpdateInput, MerchantReferralsUncheckedUpdateInput>
    /**
     * Choose, which MerchantReferrals to update.
     */
    where: MerchantReferralsWhereUniqueInput
  }

  /**
   * MerchantReferrals updateMany
   */
  export type MerchantReferralsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MerchantReferrals.
     */
    data: XOR<MerchantReferralsUpdateManyMutationInput, MerchantReferralsUncheckedUpdateManyInput>
    /**
     * Filter which MerchantReferrals to update
     */
    where?: MerchantReferralsWhereInput
  }

  /**
   * MerchantReferrals upsert
   */
  export type MerchantReferralsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantReferrals
     */
    select?: MerchantReferralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantReferralsInclude<ExtArgs> | null
    /**
     * The filter to search for the MerchantReferrals to update in case it exists.
     */
    where: MerchantReferralsWhereUniqueInput
    /**
     * In case the MerchantReferrals found by the `where` argument doesn't exist, create a new MerchantReferrals with this data.
     */
    create: XOR<MerchantReferralsCreateInput, MerchantReferralsUncheckedCreateInput>
    /**
     * In case the MerchantReferrals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerchantReferralsUpdateInput, MerchantReferralsUncheckedUpdateInput>
  }

  /**
   * MerchantReferrals delete
   */
  export type MerchantReferralsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantReferrals
     */
    select?: MerchantReferralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantReferralsInclude<ExtArgs> | null
    /**
     * Filter which MerchantReferrals to delete.
     */
    where: MerchantReferralsWhereUniqueInput
  }

  /**
   * MerchantReferrals deleteMany
   */
  export type MerchantReferralsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MerchantReferrals to delete
     */
    where?: MerchantReferralsWhereInput
  }

  /**
   * MerchantReferrals without action
   */
  export type MerchantReferralsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantReferrals
     */
    select?: MerchantReferralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantReferralsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    birthday: 'birthday',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MerchantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    nfcTagId: 'nfcTagId',
    rewardGoal: 'rewardGoal',
    rewardDescription: 'rewardDescription',
    activePromos: 'activePromos',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MerchantScalarFieldEnum = (typeof MerchantScalarFieldEnum)[keyof typeof MerchantScalarFieldEnum]


  export const CheckinScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    userId: 'userId',
    merchantId: 'merchantId'
  };

  export type CheckinScalarFieldEnum = (typeof CheckinScalarFieldEnum)[keyof typeof CheckinScalarFieldEnum]


  export const RewardScalarFieldEnum: {
    id: 'id',
    progress: 'progress',
    rewardClaimed: 'rewardClaimed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    merchantId: 'merchantId'
  };

  export type RewardScalarFieldEnum = (typeof RewardScalarFieldEnum)[keyof typeof RewardScalarFieldEnum]


  export const MerchantReferralsScalarFieldEnum: {
    id: 'id',
    referringToId: 'referringToId',
    referredById: 'referredById',
    referralCode: 'referralCode',
    createdAt: 'createdAt'
  };

  export type MerchantReferralsScalarFieldEnum = (typeof MerchantReferralsScalarFieldEnum)[keyof typeof MerchantReferralsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    birthday?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    checkins?: CheckinListRelationFilter
    rewards?: RewardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    birthday?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checkins?: CheckinOrderByRelationAggregateInput
    rewards?: RewardOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    birthday?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    checkins?: CheckinListRelationFilter
    rewards?: RewardListRelationFilter
  }, "id" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    birthday?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    birthday?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MerchantWhereInput = {
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    id?: StringFilter<"Merchant"> | string
    name?: StringFilter<"Merchant"> | string
    location?: StringFilter<"Merchant"> | string
    nfcTagId?: StringFilter<"Merchant"> | string
    rewardGoal?: IntFilter<"Merchant"> | number
    rewardDescription?: StringFilter<"Merchant"> | string
    activePromos?: JsonNullableFilter<"Merchant">
    createdAt?: DateTimeFilter<"Merchant"> | Date | string
    updatedAt?: DateTimeFilter<"Merchant"> | Date | string
    checkins?: CheckinListRelationFilter
    rewards?: RewardListRelationFilter
    referringTo?: MerchantReferralsListRelationFilter
    referredBy?: MerchantReferralsListRelationFilter
  }

  export type MerchantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    nfcTagId?: SortOrder
    rewardGoal?: SortOrder
    rewardDescription?: SortOrder
    activePromos?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checkins?: CheckinOrderByRelationAggregateInput
    rewards?: RewardOrderByRelationAggregateInput
    referringTo?: MerchantReferralsOrderByRelationAggregateInput
    referredBy?: MerchantReferralsOrderByRelationAggregateInput
  }

  export type MerchantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nfcTagId?: string
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    name?: StringFilter<"Merchant"> | string
    location?: StringFilter<"Merchant"> | string
    rewardGoal?: IntFilter<"Merchant"> | number
    rewardDescription?: StringFilter<"Merchant"> | string
    activePromos?: JsonNullableFilter<"Merchant">
    createdAt?: DateTimeFilter<"Merchant"> | Date | string
    updatedAt?: DateTimeFilter<"Merchant"> | Date | string
    checkins?: CheckinListRelationFilter
    rewards?: RewardListRelationFilter
    referringTo?: MerchantReferralsListRelationFilter
    referredBy?: MerchantReferralsListRelationFilter
  }, "id" | "nfcTagId">

  export type MerchantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    nfcTagId?: SortOrder
    rewardGoal?: SortOrder
    rewardDescription?: SortOrder
    activePromos?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MerchantCountOrderByAggregateInput
    _avg?: MerchantAvgOrderByAggregateInput
    _max?: MerchantMaxOrderByAggregateInput
    _min?: MerchantMinOrderByAggregateInput
    _sum?: MerchantSumOrderByAggregateInput
  }

  export type MerchantScalarWhereWithAggregatesInput = {
    AND?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    OR?: MerchantScalarWhereWithAggregatesInput[]
    NOT?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Merchant"> | string
    name?: StringWithAggregatesFilter<"Merchant"> | string
    location?: StringWithAggregatesFilter<"Merchant"> | string
    nfcTagId?: StringWithAggregatesFilter<"Merchant"> | string
    rewardGoal?: IntWithAggregatesFilter<"Merchant"> | number
    rewardDescription?: StringWithAggregatesFilter<"Merchant"> | string
    activePromos?: JsonNullableWithAggregatesFilter<"Merchant">
    createdAt?: DateTimeWithAggregatesFilter<"Merchant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Merchant"> | Date | string
  }

  export type CheckinWhereInput = {
    AND?: CheckinWhereInput | CheckinWhereInput[]
    OR?: CheckinWhereInput[]
    NOT?: CheckinWhereInput | CheckinWhereInput[]
    id?: StringFilter<"Checkin"> | string
    timestamp?: DateTimeFilter<"Checkin"> | Date | string
    userId?: StringFilter<"Checkin"> | string
    merchantId?: StringFilter<"Checkin"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }

  export type CheckinOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    merchantId?: SortOrder
    user?: UserOrderByWithRelationInput
    merchant?: MerchantOrderByWithRelationInput
  }

  export type CheckinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckinWhereInput | CheckinWhereInput[]
    OR?: CheckinWhereInput[]
    NOT?: CheckinWhereInput | CheckinWhereInput[]
    timestamp?: DateTimeFilter<"Checkin"> | Date | string
    userId?: StringFilter<"Checkin"> | string
    merchantId?: StringFilter<"Checkin"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }, "id">

  export type CheckinOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    merchantId?: SortOrder
    _count?: CheckinCountOrderByAggregateInput
    _max?: CheckinMaxOrderByAggregateInput
    _min?: CheckinMinOrderByAggregateInput
  }

  export type CheckinScalarWhereWithAggregatesInput = {
    AND?: CheckinScalarWhereWithAggregatesInput | CheckinScalarWhereWithAggregatesInput[]
    OR?: CheckinScalarWhereWithAggregatesInput[]
    NOT?: CheckinScalarWhereWithAggregatesInput | CheckinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Checkin"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Checkin"> | Date | string
    userId?: StringWithAggregatesFilter<"Checkin"> | string
    merchantId?: StringWithAggregatesFilter<"Checkin"> | string
  }

  export type RewardWhereInput = {
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    id?: StringFilter<"Reward"> | string
    progress?: IntFilter<"Reward"> | number
    rewardClaimed?: BoolFilter<"Reward"> | boolean
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    updatedAt?: DateTimeFilter<"Reward"> | Date | string
    userId?: StringFilter<"Reward"> | string
    merchantId?: StringFilter<"Reward"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }

  export type RewardOrderByWithRelationInput = {
    id?: SortOrder
    progress?: SortOrder
    rewardClaimed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    merchantId?: SortOrder
    user?: UserOrderByWithRelationInput
    merchant?: MerchantOrderByWithRelationInput
  }

  export type RewardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_merchantId?: RewardUserIdMerchantIdCompoundUniqueInput
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    progress?: IntFilter<"Reward"> | number
    rewardClaimed?: BoolFilter<"Reward"> | boolean
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    updatedAt?: DateTimeFilter<"Reward"> | Date | string
    userId?: StringFilter<"Reward"> | string
    merchantId?: StringFilter<"Reward"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }, "id" | "userId_merchantId">

  export type RewardOrderByWithAggregationInput = {
    id?: SortOrder
    progress?: SortOrder
    rewardClaimed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    merchantId?: SortOrder
    _count?: RewardCountOrderByAggregateInput
    _avg?: RewardAvgOrderByAggregateInput
    _max?: RewardMaxOrderByAggregateInput
    _min?: RewardMinOrderByAggregateInput
    _sum?: RewardSumOrderByAggregateInput
  }

  export type RewardScalarWhereWithAggregatesInput = {
    AND?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    OR?: RewardScalarWhereWithAggregatesInput[]
    NOT?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reward"> | string
    progress?: IntWithAggregatesFilter<"Reward"> | number
    rewardClaimed?: BoolWithAggregatesFilter<"Reward"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Reward"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reward"> | Date | string
    userId?: StringWithAggregatesFilter<"Reward"> | string
    merchantId?: StringWithAggregatesFilter<"Reward"> | string
  }

  export type MerchantReferralsWhereInput = {
    AND?: MerchantReferralsWhereInput | MerchantReferralsWhereInput[]
    OR?: MerchantReferralsWhereInput[]
    NOT?: MerchantReferralsWhereInput | MerchantReferralsWhereInput[]
    id?: StringFilter<"MerchantReferrals"> | string
    referringToId?: StringFilter<"MerchantReferrals"> | string
    referredById?: StringFilter<"MerchantReferrals"> | string
    referralCode?: StringFilter<"MerchantReferrals"> | string
    createdAt?: DateTimeFilter<"MerchantReferrals"> | Date | string
    referringTo?: XOR<MerchantRelationFilter, MerchantWhereInput>
    referredBy?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }

  export type MerchantReferralsOrderByWithRelationInput = {
    id?: SortOrder
    referringToId?: SortOrder
    referredById?: SortOrder
    referralCode?: SortOrder
    createdAt?: SortOrder
    referringTo?: MerchantOrderByWithRelationInput
    referredBy?: MerchantOrderByWithRelationInput
  }

  export type MerchantReferralsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referringToId_referredById?: MerchantReferralsReferringToIdReferredByIdCompoundUniqueInput
    AND?: MerchantReferralsWhereInput | MerchantReferralsWhereInput[]
    OR?: MerchantReferralsWhereInput[]
    NOT?: MerchantReferralsWhereInput | MerchantReferralsWhereInput[]
    referringToId?: StringFilter<"MerchantReferrals"> | string
    referredById?: StringFilter<"MerchantReferrals"> | string
    referralCode?: StringFilter<"MerchantReferrals"> | string
    createdAt?: DateTimeFilter<"MerchantReferrals"> | Date | string
    referringTo?: XOR<MerchantRelationFilter, MerchantWhereInput>
    referredBy?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }, "id" | "referringToId_referredById">

  export type MerchantReferralsOrderByWithAggregationInput = {
    id?: SortOrder
    referringToId?: SortOrder
    referredById?: SortOrder
    referralCode?: SortOrder
    createdAt?: SortOrder
    _count?: MerchantReferralsCountOrderByAggregateInput
    _max?: MerchantReferralsMaxOrderByAggregateInput
    _min?: MerchantReferralsMinOrderByAggregateInput
  }

  export type MerchantReferralsScalarWhereWithAggregatesInput = {
    AND?: MerchantReferralsScalarWhereWithAggregatesInput | MerchantReferralsScalarWhereWithAggregatesInput[]
    OR?: MerchantReferralsScalarWhereWithAggregatesInput[]
    NOT?: MerchantReferralsScalarWhereWithAggregatesInput | MerchantReferralsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MerchantReferrals"> | string
    referringToId?: StringWithAggregatesFilter<"MerchantReferrals"> | string
    referredById?: StringWithAggregatesFilter<"MerchantReferrals"> | string
    referralCode?: StringWithAggregatesFilter<"MerchantReferrals"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MerchantReferrals"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    phoneNumber: string
    birthday?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinCreateNestedManyWithoutUserInput
    rewards?: RewardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    phoneNumber: string
    birthday?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUpdateManyWithoutUserNestedInput
    rewards?: RewardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    phoneNumber: string
    birthday?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MerchantCreateInput = {
    id?: string
    name: string
    location: string
    nfcTagId: string
    rewardGoal: number
    rewardDescription: string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinCreateNestedManyWithoutMerchantInput
    rewards?: RewardCreateNestedManyWithoutMerchantInput
    referringTo?: MerchantReferralsCreateNestedManyWithoutReferringToInput
    referredBy?: MerchantReferralsCreateNestedManyWithoutReferredByInput
  }

  export type MerchantUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    nfcTagId: string
    rewardGoal: number
    rewardDescription: string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinUncheckedCreateNestedManyWithoutMerchantInput
    rewards?: RewardUncheckedCreateNestedManyWithoutMerchantInput
    referringTo?: MerchantReferralsUncheckedCreateNestedManyWithoutReferringToInput
    referredBy?: MerchantReferralsUncheckedCreateNestedManyWithoutReferredByInput
  }

  export type MerchantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    nfcTagId?: StringFieldUpdateOperationsInput | string
    rewardGoal?: IntFieldUpdateOperationsInput | number
    rewardDescription?: StringFieldUpdateOperationsInput | string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUpdateManyWithoutMerchantNestedInput
    rewards?: RewardUpdateManyWithoutMerchantNestedInput
    referringTo?: MerchantReferralsUpdateManyWithoutReferringToNestedInput
    referredBy?: MerchantReferralsUpdateManyWithoutReferredByNestedInput
  }

  export type MerchantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    nfcTagId?: StringFieldUpdateOperationsInput | string
    rewardGoal?: IntFieldUpdateOperationsInput | number
    rewardDescription?: StringFieldUpdateOperationsInput | string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUncheckedUpdateManyWithoutMerchantNestedInput
    rewards?: RewardUncheckedUpdateManyWithoutMerchantNestedInput
    referringTo?: MerchantReferralsUncheckedUpdateManyWithoutReferringToNestedInput
    referredBy?: MerchantReferralsUncheckedUpdateManyWithoutReferredByNestedInput
  }

  export type MerchantCreateManyInput = {
    id?: string
    name: string
    location: string
    nfcTagId: string
    rewardGoal: number
    rewardDescription: string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MerchantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    nfcTagId?: StringFieldUpdateOperationsInput | string
    rewardGoal?: IntFieldUpdateOperationsInput | number
    rewardDescription?: StringFieldUpdateOperationsInput | string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MerchantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    nfcTagId?: StringFieldUpdateOperationsInput | string
    rewardGoal?: IntFieldUpdateOperationsInput | number
    rewardDescription?: StringFieldUpdateOperationsInput | string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinCreateInput = {
    id?: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutCheckinsInput
    merchant: MerchantCreateNestedOneWithoutCheckinsInput
  }

  export type CheckinUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    userId: string
    merchantId: string
  }

  export type CheckinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCheckinsNestedInput
    merchant?: MerchantUpdateOneRequiredWithoutCheckinsNestedInput
  }

  export type CheckinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
  }

  export type CheckinCreateManyInput = {
    id?: string
    timestamp?: Date | string
    userId: string
    merchantId: string
  }

  export type CheckinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
  }

  export type RewardCreateInput = {
    id?: string
    progress?: number
    rewardClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRewardsInput
    merchant: MerchantCreateNestedOneWithoutRewardsInput
  }

  export type RewardUncheckedCreateInput = {
    id?: string
    progress?: number
    rewardClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    merchantId: string
  }

  export type RewardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    rewardClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRewardsNestedInput
    merchant?: MerchantUpdateOneRequiredWithoutRewardsNestedInput
  }

  export type RewardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    rewardClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
  }

  export type RewardCreateManyInput = {
    id?: string
    progress?: number
    rewardClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    merchantId: string
  }

  export type RewardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    rewardClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    rewardClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
  }

  export type MerchantReferralsCreateInput = {
    id?: string
    referralCode: string
    createdAt?: Date | string
    referringTo: MerchantCreateNestedOneWithoutReferringToInput
    referredBy: MerchantCreateNestedOneWithoutReferredByInput
  }

  export type MerchantReferralsUncheckedCreateInput = {
    id?: string
    referringToId: string
    referredById: string
    referralCode: string
    createdAt?: Date | string
  }

  export type MerchantReferralsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referringTo?: MerchantUpdateOneRequiredWithoutReferringToNestedInput
    referredBy?: MerchantUpdateOneRequiredWithoutReferredByNestedInput
  }

  export type MerchantReferralsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referringToId?: StringFieldUpdateOperationsInput | string
    referredById?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MerchantReferralsCreateManyInput = {
    id?: string
    referringToId: string
    referredById: string
    referralCode: string
    createdAt?: Date | string
  }

  export type MerchantReferralsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MerchantReferralsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referringToId?: StringFieldUpdateOperationsInput | string
    referredById?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CheckinListRelationFilter = {
    every?: CheckinWhereInput
    some?: CheckinWhereInput
    none?: CheckinWhereInput
  }

  export type RewardListRelationFilter = {
    every?: RewardWhereInput
    some?: RewardWhereInput
    none?: RewardWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CheckinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RewardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    birthday?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    birthday?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    birthday?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MerchantReferralsListRelationFilter = {
    every?: MerchantReferralsWhereInput
    some?: MerchantReferralsWhereInput
    none?: MerchantReferralsWhereInput
  }

  export type MerchantReferralsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MerchantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    nfcTagId?: SortOrder
    rewardGoal?: SortOrder
    rewardDescription?: SortOrder
    activePromos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MerchantAvgOrderByAggregateInput = {
    rewardGoal?: SortOrder
  }

  export type MerchantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    nfcTagId?: SortOrder
    rewardGoal?: SortOrder
    rewardDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MerchantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    nfcTagId?: SortOrder
    rewardGoal?: SortOrder
    rewardDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MerchantSumOrderByAggregateInput = {
    rewardGoal?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MerchantRelationFilter = {
    is?: MerchantWhereInput
    isNot?: MerchantWhereInput
  }

  export type CheckinCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    merchantId?: SortOrder
  }

  export type CheckinMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    merchantId?: SortOrder
  }

  export type CheckinMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    merchantId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RewardUserIdMerchantIdCompoundUniqueInput = {
    userId: string
    merchantId: string
  }

  export type RewardCountOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    rewardClaimed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    merchantId?: SortOrder
  }

  export type RewardAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type RewardMaxOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    rewardClaimed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    merchantId?: SortOrder
  }

  export type RewardMinOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    rewardClaimed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    merchantId?: SortOrder
  }

  export type RewardSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MerchantReferralsReferringToIdReferredByIdCompoundUniqueInput = {
    referringToId: string
    referredById: string
  }

  export type MerchantReferralsCountOrderByAggregateInput = {
    id?: SortOrder
    referringToId?: SortOrder
    referredById?: SortOrder
    referralCode?: SortOrder
    createdAt?: SortOrder
  }

  export type MerchantReferralsMaxOrderByAggregateInput = {
    id?: SortOrder
    referringToId?: SortOrder
    referredById?: SortOrder
    referralCode?: SortOrder
    createdAt?: SortOrder
  }

  export type MerchantReferralsMinOrderByAggregateInput = {
    id?: SortOrder
    referringToId?: SortOrder
    referredById?: SortOrder
    referralCode?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckinCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
  }

  export type RewardCreateNestedManyWithoutUserInput = {
    create?: XOR<RewardCreateWithoutUserInput, RewardUncheckedCreateWithoutUserInput> | RewardCreateWithoutUserInput[] | RewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutUserInput | RewardCreateOrConnectWithoutUserInput[]
    createMany?: RewardCreateManyUserInputEnvelope
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
  }

  export type CheckinUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
  }

  export type RewardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RewardCreateWithoutUserInput, RewardUncheckedCreateWithoutUserInput> | RewardCreateWithoutUserInput[] | RewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutUserInput | RewardCreateOrConnectWithoutUserInput[]
    createMany?: RewardCreateManyUserInputEnvelope
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CheckinUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    upsert?: CheckinUpsertWithWhereUniqueWithoutUserInput | CheckinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    set?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    disconnect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    delete?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    update?: CheckinUpdateWithWhereUniqueWithoutUserInput | CheckinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckinUpdateManyWithWhereWithoutUserInput | CheckinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
  }

  export type RewardUpdateManyWithoutUserNestedInput = {
    create?: XOR<RewardCreateWithoutUserInput, RewardUncheckedCreateWithoutUserInput> | RewardCreateWithoutUserInput[] | RewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutUserInput | RewardCreateOrConnectWithoutUserInput[]
    upsert?: RewardUpsertWithWhereUniqueWithoutUserInput | RewardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RewardCreateManyUserInputEnvelope
    set?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    disconnect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    delete?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    update?: RewardUpdateWithWhereUniqueWithoutUserInput | RewardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RewardUpdateManyWithWhereWithoutUserInput | RewardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RewardScalarWhereInput | RewardScalarWhereInput[]
  }

  export type CheckinUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    upsert?: CheckinUpsertWithWhereUniqueWithoutUserInput | CheckinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    set?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    disconnect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    delete?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    update?: CheckinUpdateWithWhereUniqueWithoutUserInput | CheckinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckinUpdateManyWithWhereWithoutUserInput | CheckinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
  }

  export type RewardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RewardCreateWithoutUserInput, RewardUncheckedCreateWithoutUserInput> | RewardCreateWithoutUserInput[] | RewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutUserInput | RewardCreateOrConnectWithoutUserInput[]
    upsert?: RewardUpsertWithWhereUniqueWithoutUserInput | RewardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RewardCreateManyUserInputEnvelope
    set?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    disconnect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    delete?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    update?: RewardUpdateWithWhereUniqueWithoutUserInput | RewardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RewardUpdateManyWithWhereWithoutUserInput | RewardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RewardScalarWhereInput | RewardScalarWhereInput[]
  }

  export type CheckinCreateNestedManyWithoutMerchantInput = {
    create?: XOR<CheckinCreateWithoutMerchantInput, CheckinUncheckedCreateWithoutMerchantInput> | CheckinCreateWithoutMerchantInput[] | CheckinUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutMerchantInput | CheckinCreateOrConnectWithoutMerchantInput[]
    createMany?: CheckinCreateManyMerchantInputEnvelope
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
  }

  export type RewardCreateNestedManyWithoutMerchantInput = {
    create?: XOR<RewardCreateWithoutMerchantInput, RewardUncheckedCreateWithoutMerchantInput> | RewardCreateWithoutMerchantInput[] | RewardUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutMerchantInput | RewardCreateOrConnectWithoutMerchantInput[]
    createMany?: RewardCreateManyMerchantInputEnvelope
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
  }

  export type MerchantReferralsCreateNestedManyWithoutReferringToInput = {
    create?: XOR<MerchantReferralsCreateWithoutReferringToInput, MerchantReferralsUncheckedCreateWithoutReferringToInput> | MerchantReferralsCreateWithoutReferringToInput[] | MerchantReferralsUncheckedCreateWithoutReferringToInput[]
    connectOrCreate?: MerchantReferralsCreateOrConnectWithoutReferringToInput | MerchantReferralsCreateOrConnectWithoutReferringToInput[]
    createMany?: MerchantReferralsCreateManyReferringToInputEnvelope
    connect?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
  }

  export type MerchantReferralsCreateNestedManyWithoutReferredByInput = {
    create?: XOR<MerchantReferralsCreateWithoutReferredByInput, MerchantReferralsUncheckedCreateWithoutReferredByInput> | MerchantReferralsCreateWithoutReferredByInput[] | MerchantReferralsUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: MerchantReferralsCreateOrConnectWithoutReferredByInput | MerchantReferralsCreateOrConnectWithoutReferredByInput[]
    createMany?: MerchantReferralsCreateManyReferredByInputEnvelope
    connect?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
  }

  export type CheckinUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<CheckinCreateWithoutMerchantInput, CheckinUncheckedCreateWithoutMerchantInput> | CheckinCreateWithoutMerchantInput[] | CheckinUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutMerchantInput | CheckinCreateOrConnectWithoutMerchantInput[]
    createMany?: CheckinCreateManyMerchantInputEnvelope
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
  }

  export type RewardUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<RewardCreateWithoutMerchantInput, RewardUncheckedCreateWithoutMerchantInput> | RewardCreateWithoutMerchantInput[] | RewardUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutMerchantInput | RewardCreateOrConnectWithoutMerchantInput[]
    createMany?: RewardCreateManyMerchantInputEnvelope
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
  }

  export type MerchantReferralsUncheckedCreateNestedManyWithoutReferringToInput = {
    create?: XOR<MerchantReferralsCreateWithoutReferringToInput, MerchantReferralsUncheckedCreateWithoutReferringToInput> | MerchantReferralsCreateWithoutReferringToInput[] | MerchantReferralsUncheckedCreateWithoutReferringToInput[]
    connectOrCreate?: MerchantReferralsCreateOrConnectWithoutReferringToInput | MerchantReferralsCreateOrConnectWithoutReferringToInput[]
    createMany?: MerchantReferralsCreateManyReferringToInputEnvelope
    connect?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
  }

  export type MerchantReferralsUncheckedCreateNestedManyWithoutReferredByInput = {
    create?: XOR<MerchantReferralsCreateWithoutReferredByInput, MerchantReferralsUncheckedCreateWithoutReferredByInput> | MerchantReferralsCreateWithoutReferredByInput[] | MerchantReferralsUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: MerchantReferralsCreateOrConnectWithoutReferredByInput | MerchantReferralsCreateOrConnectWithoutReferredByInput[]
    createMany?: MerchantReferralsCreateManyReferredByInputEnvelope
    connect?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CheckinUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<CheckinCreateWithoutMerchantInput, CheckinUncheckedCreateWithoutMerchantInput> | CheckinCreateWithoutMerchantInput[] | CheckinUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutMerchantInput | CheckinCreateOrConnectWithoutMerchantInput[]
    upsert?: CheckinUpsertWithWhereUniqueWithoutMerchantInput | CheckinUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: CheckinCreateManyMerchantInputEnvelope
    set?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    disconnect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    delete?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    update?: CheckinUpdateWithWhereUniqueWithoutMerchantInput | CheckinUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: CheckinUpdateManyWithWhereWithoutMerchantInput | CheckinUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
  }

  export type RewardUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<RewardCreateWithoutMerchantInput, RewardUncheckedCreateWithoutMerchantInput> | RewardCreateWithoutMerchantInput[] | RewardUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutMerchantInput | RewardCreateOrConnectWithoutMerchantInput[]
    upsert?: RewardUpsertWithWhereUniqueWithoutMerchantInput | RewardUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: RewardCreateManyMerchantInputEnvelope
    set?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    disconnect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    delete?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    update?: RewardUpdateWithWhereUniqueWithoutMerchantInput | RewardUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: RewardUpdateManyWithWhereWithoutMerchantInput | RewardUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: RewardScalarWhereInput | RewardScalarWhereInput[]
  }

  export type MerchantReferralsUpdateManyWithoutReferringToNestedInput = {
    create?: XOR<MerchantReferralsCreateWithoutReferringToInput, MerchantReferralsUncheckedCreateWithoutReferringToInput> | MerchantReferralsCreateWithoutReferringToInput[] | MerchantReferralsUncheckedCreateWithoutReferringToInput[]
    connectOrCreate?: MerchantReferralsCreateOrConnectWithoutReferringToInput | MerchantReferralsCreateOrConnectWithoutReferringToInput[]
    upsert?: MerchantReferralsUpsertWithWhereUniqueWithoutReferringToInput | MerchantReferralsUpsertWithWhereUniqueWithoutReferringToInput[]
    createMany?: MerchantReferralsCreateManyReferringToInputEnvelope
    set?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    disconnect?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    delete?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    connect?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    update?: MerchantReferralsUpdateWithWhereUniqueWithoutReferringToInput | MerchantReferralsUpdateWithWhereUniqueWithoutReferringToInput[]
    updateMany?: MerchantReferralsUpdateManyWithWhereWithoutReferringToInput | MerchantReferralsUpdateManyWithWhereWithoutReferringToInput[]
    deleteMany?: MerchantReferralsScalarWhereInput | MerchantReferralsScalarWhereInput[]
  }

  export type MerchantReferralsUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<MerchantReferralsCreateWithoutReferredByInput, MerchantReferralsUncheckedCreateWithoutReferredByInput> | MerchantReferralsCreateWithoutReferredByInput[] | MerchantReferralsUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: MerchantReferralsCreateOrConnectWithoutReferredByInput | MerchantReferralsCreateOrConnectWithoutReferredByInput[]
    upsert?: MerchantReferralsUpsertWithWhereUniqueWithoutReferredByInput | MerchantReferralsUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: MerchantReferralsCreateManyReferredByInputEnvelope
    set?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    disconnect?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    delete?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    connect?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    update?: MerchantReferralsUpdateWithWhereUniqueWithoutReferredByInput | MerchantReferralsUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: MerchantReferralsUpdateManyWithWhereWithoutReferredByInput | MerchantReferralsUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: MerchantReferralsScalarWhereInput | MerchantReferralsScalarWhereInput[]
  }

  export type CheckinUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<CheckinCreateWithoutMerchantInput, CheckinUncheckedCreateWithoutMerchantInput> | CheckinCreateWithoutMerchantInput[] | CheckinUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutMerchantInput | CheckinCreateOrConnectWithoutMerchantInput[]
    upsert?: CheckinUpsertWithWhereUniqueWithoutMerchantInput | CheckinUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: CheckinCreateManyMerchantInputEnvelope
    set?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    disconnect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    delete?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    update?: CheckinUpdateWithWhereUniqueWithoutMerchantInput | CheckinUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: CheckinUpdateManyWithWhereWithoutMerchantInput | CheckinUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
  }

  export type RewardUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<RewardCreateWithoutMerchantInput, RewardUncheckedCreateWithoutMerchantInput> | RewardCreateWithoutMerchantInput[] | RewardUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutMerchantInput | RewardCreateOrConnectWithoutMerchantInput[]
    upsert?: RewardUpsertWithWhereUniqueWithoutMerchantInput | RewardUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: RewardCreateManyMerchantInputEnvelope
    set?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    disconnect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    delete?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    update?: RewardUpdateWithWhereUniqueWithoutMerchantInput | RewardUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: RewardUpdateManyWithWhereWithoutMerchantInput | RewardUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: RewardScalarWhereInput | RewardScalarWhereInput[]
  }

  export type MerchantReferralsUncheckedUpdateManyWithoutReferringToNestedInput = {
    create?: XOR<MerchantReferralsCreateWithoutReferringToInput, MerchantReferralsUncheckedCreateWithoutReferringToInput> | MerchantReferralsCreateWithoutReferringToInput[] | MerchantReferralsUncheckedCreateWithoutReferringToInput[]
    connectOrCreate?: MerchantReferralsCreateOrConnectWithoutReferringToInput | MerchantReferralsCreateOrConnectWithoutReferringToInput[]
    upsert?: MerchantReferralsUpsertWithWhereUniqueWithoutReferringToInput | MerchantReferralsUpsertWithWhereUniqueWithoutReferringToInput[]
    createMany?: MerchantReferralsCreateManyReferringToInputEnvelope
    set?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    disconnect?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    delete?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    connect?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    update?: MerchantReferralsUpdateWithWhereUniqueWithoutReferringToInput | MerchantReferralsUpdateWithWhereUniqueWithoutReferringToInput[]
    updateMany?: MerchantReferralsUpdateManyWithWhereWithoutReferringToInput | MerchantReferralsUpdateManyWithWhereWithoutReferringToInput[]
    deleteMany?: MerchantReferralsScalarWhereInput | MerchantReferralsScalarWhereInput[]
  }

  export type MerchantReferralsUncheckedUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<MerchantReferralsCreateWithoutReferredByInput, MerchantReferralsUncheckedCreateWithoutReferredByInput> | MerchantReferralsCreateWithoutReferredByInput[] | MerchantReferralsUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: MerchantReferralsCreateOrConnectWithoutReferredByInput | MerchantReferralsCreateOrConnectWithoutReferredByInput[]
    upsert?: MerchantReferralsUpsertWithWhereUniqueWithoutReferredByInput | MerchantReferralsUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: MerchantReferralsCreateManyReferredByInputEnvelope
    set?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    disconnect?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    delete?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    connect?: MerchantReferralsWhereUniqueInput | MerchantReferralsWhereUniqueInput[]
    update?: MerchantReferralsUpdateWithWhereUniqueWithoutReferredByInput | MerchantReferralsUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: MerchantReferralsUpdateManyWithWhereWithoutReferredByInput | MerchantReferralsUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: MerchantReferralsScalarWhereInput | MerchantReferralsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCheckinsInput = {
    create?: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckinsInput
    connect?: UserWhereUniqueInput
  }

  export type MerchantCreateNestedOneWithoutCheckinsInput = {
    create?: XOR<MerchantCreateWithoutCheckinsInput, MerchantUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutCheckinsInput
    connect?: MerchantWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCheckinsNestedInput = {
    create?: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckinsInput
    upsert?: UserUpsertWithoutCheckinsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCheckinsInput, UserUpdateWithoutCheckinsInput>, UserUncheckedUpdateWithoutCheckinsInput>
  }

  export type MerchantUpdateOneRequiredWithoutCheckinsNestedInput = {
    create?: XOR<MerchantCreateWithoutCheckinsInput, MerchantUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutCheckinsInput
    upsert?: MerchantUpsertWithoutCheckinsInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutCheckinsInput, MerchantUpdateWithoutCheckinsInput>, MerchantUncheckedUpdateWithoutCheckinsInput>
  }

  export type UserCreateNestedOneWithoutRewardsInput = {
    create?: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardsInput
    connect?: UserWhereUniqueInput
  }

  export type MerchantCreateNestedOneWithoutRewardsInput = {
    create?: XOR<MerchantCreateWithoutRewardsInput, MerchantUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutRewardsInput
    connect?: MerchantWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutRewardsNestedInput = {
    create?: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardsInput
    upsert?: UserUpsertWithoutRewardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRewardsInput, UserUpdateWithoutRewardsInput>, UserUncheckedUpdateWithoutRewardsInput>
  }

  export type MerchantUpdateOneRequiredWithoutRewardsNestedInput = {
    create?: XOR<MerchantCreateWithoutRewardsInput, MerchantUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutRewardsInput
    upsert?: MerchantUpsertWithoutRewardsInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutRewardsInput, MerchantUpdateWithoutRewardsInput>, MerchantUncheckedUpdateWithoutRewardsInput>
  }

  export type MerchantCreateNestedOneWithoutReferringToInput = {
    create?: XOR<MerchantCreateWithoutReferringToInput, MerchantUncheckedCreateWithoutReferringToInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutReferringToInput
    connect?: MerchantWhereUniqueInput
  }

  export type MerchantCreateNestedOneWithoutReferredByInput = {
    create?: XOR<MerchantCreateWithoutReferredByInput, MerchantUncheckedCreateWithoutReferredByInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutReferredByInput
    connect?: MerchantWhereUniqueInput
  }

  export type MerchantUpdateOneRequiredWithoutReferringToNestedInput = {
    create?: XOR<MerchantCreateWithoutReferringToInput, MerchantUncheckedCreateWithoutReferringToInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutReferringToInput
    upsert?: MerchantUpsertWithoutReferringToInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutReferringToInput, MerchantUpdateWithoutReferringToInput>, MerchantUncheckedUpdateWithoutReferringToInput>
  }

  export type MerchantUpdateOneRequiredWithoutReferredByNestedInput = {
    create?: XOR<MerchantCreateWithoutReferredByInput, MerchantUncheckedCreateWithoutReferredByInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutReferredByInput
    upsert?: MerchantUpsertWithoutReferredByInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutReferredByInput, MerchantUpdateWithoutReferredByInput>, MerchantUncheckedUpdateWithoutReferredByInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CheckinCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    merchant: MerchantCreateNestedOneWithoutCheckinsInput
  }

  export type CheckinUncheckedCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    merchantId: string
  }

  export type CheckinCreateOrConnectWithoutUserInput = {
    where: CheckinWhereUniqueInput
    create: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput>
  }

  export type CheckinCreateManyUserInputEnvelope = {
    data: CheckinCreateManyUserInput | CheckinCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RewardCreateWithoutUserInput = {
    id?: string
    progress?: number
    rewardClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutRewardsInput
  }

  export type RewardUncheckedCreateWithoutUserInput = {
    id?: string
    progress?: number
    rewardClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    merchantId: string
  }

  export type RewardCreateOrConnectWithoutUserInput = {
    where: RewardWhereUniqueInput
    create: XOR<RewardCreateWithoutUserInput, RewardUncheckedCreateWithoutUserInput>
  }

  export type RewardCreateManyUserInputEnvelope = {
    data: RewardCreateManyUserInput | RewardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CheckinUpsertWithWhereUniqueWithoutUserInput = {
    where: CheckinWhereUniqueInput
    update: XOR<CheckinUpdateWithoutUserInput, CheckinUncheckedUpdateWithoutUserInput>
    create: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput>
  }

  export type CheckinUpdateWithWhereUniqueWithoutUserInput = {
    where: CheckinWhereUniqueInput
    data: XOR<CheckinUpdateWithoutUserInput, CheckinUncheckedUpdateWithoutUserInput>
  }

  export type CheckinUpdateManyWithWhereWithoutUserInput = {
    where: CheckinScalarWhereInput
    data: XOR<CheckinUpdateManyMutationInput, CheckinUncheckedUpdateManyWithoutUserInput>
  }

  export type CheckinScalarWhereInput = {
    AND?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
    OR?: CheckinScalarWhereInput[]
    NOT?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
    id?: StringFilter<"Checkin"> | string
    timestamp?: DateTimeFilter<"Checkin"> | Date | string
    userId?: StringFilter<"Checkin"> | string
    merchantId?: StringFilter<"Checkin"> | string
  }

  export type RewardUpsertWithWhereUniqueWithoutUserInput = {
    where: RewardWhereUniqueInput
    update: XOR<RewardUpdateWithoutUserInput, RewardUncheckedUpdateWithoutUserInput>
    create: XOR<RewardCreateWithoutUserInput, RewardUncheckedCreateWithoutUserInput>
  }

  export type RewardUpdateWithWhereUniqueWithoutUserInput = {
    where: RewardWhereUniqueInput
    data: XOR<RewardUpdateWithoutUserInput, RewardUncheckedUpdateWithoutUserInput>
  }

  export type RewardUpdateManyWithWhereWithoutUserInput = {
    where: RewardScalarWhereInput
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyWithoutUserInput>
  }

  export type RewardScalarWhereInput = {
    AND?: RewardScalarWhereInput | RewardScalarWhereInput[]
    OR?: RewardScalarWhereInput[]
    NOT?: RewardScalarWhereInput | RewardScalarWhereInput[]
    id?: StringFilter<"Reward"> | string
    progress?: IntFilter<"Reward"> | number
    rewardClaimed?: BoolFilter<"Reward"> | boolean
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    updatedAt?: DateTimeFilter<"Reward"> | Date | string
    userId?: StringFilter<"Reward"> | string
    merchantId?: StringFilter<"Reward"> | string
  }

  export type CheckinCreateWithoutMerchantInput = {
    id?: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutCheckinsInput
  }

  export type CheckinUncheckedCreateWithoutMerchantInput = {
    id?: string
    timestamp?: Date | string
    userId: string
  }

  export type CheckinCreateOrConnectWithoutMerchantInput = {
    where: CheckinWhereUniqueInput
    create: XOR<CheckinCreateWithoutMerchantInput, CheckinUncheckedCreateWithoutMerchantInput>
  }

  export type CheckinCreateManyMerchantInputEnvelope = {
    data: CheckinCreateManyMerchantInput | CheckinCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type RewardCreateWithoutMerchantInput = {
    id?: string
    progress?: number
    rewardClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRewardsInput
  }

  export type RewardUncheckedCreateWithoutMerchantInput = {
    id?: string
    progress?: number
    rewardClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type RewardCreateOrConnectWithoutMerchantInput = {
    where: RewardWhereUniqueInput
    create: XOR<RewardCreateWithoutMerchantInput, RewardUncheckedCreateWithoutMerchantInput>
  }

  export type RewardCreateManyMerchantInputEnvelope = {
    data: RewardCreateManyMerchantInput | RewardCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type MerchantReferralsCreateWithoutReferringToInput = {
    id?: string
    referralCode: string
    createdAt?: Date | string
    referredBy: MerchantCreateNestedOneWithoutReferredByInput
  }

  export type MerchantReferralsUncheckedCreateWithoutReferringToInput = {
    id?: string
    referredById: string
    referralCode: string
    createdAt?: Date | string
  }

  export type MerchantReferralsCreateOrConnectWithoutReferringToInput = {
    where: MerchantReferralsWhereUniqueInput
    create: XOR<MerchantReferralsCreateWithoutReferringToInput, MerchantReferralsUncheckedCreateWithoutReferringToInput>
  }

  export type MerchantReferralsCreateManyReferringToInputEnvelope = {
    data: MerchantReferralsCreateManyReferringToInput | MerchantReferralsCreateManyReferringToInput[]
    skipDuplicates?: boolean
  }

  export type MerchantReferralsCreateWithoutReferredByInput = {
    id?: string
    referralCode: string
    createdAt?: Date | string
    referringTo: MerchantCreateNestedOneWithoutReferringToInput
  }

  export type MerchantReferralsUncheckedCreateWithoutReferredByInput = {
    id?: string
    referringToId: string
    referralCode: string
    createdAt?: Date | string
  }

  export type MerchantReferralsCreateOrConnectWithoutReferredByInput = {
    where: MerchantReferralsWhereUniqueInput
    create: XOR<MerchantReferralsCreateWithoutReferredByInput, MerchantReferralsUncheckedCreateWithoutReferredByInput>
  }

  export type MerchantReferralsCreateManyReferredByInputEnvelope = {
    data: MerchantReferralsCreateManyReferredByInput | MerchantReferralsCreateManyReferredByInput[]
    skipDuplicates?: boolean
  }

  export type CheckinUpsertWithWhereUniqueWithoutMerchantInput = {
    where: CheckinWhereUniqueInput
    update: XOR<CheckinUpdateWithoutMerchantInput, CheckinUncheckedUpdateWithoutMerchantInput>
    create: XOR<CheckinCreateWithoutMerchantInput, CheckinUncheckedCreateWithoutMerchantInput>
  }

  export type CheckinUpdateWithWhereUniqueWithoutMerchantInput = {
    where: CheckinWhereUniqueInput
    data: XOR<CheckinUpdateWithoutMerchantInput, CheckinUncheckedUpdateWithoutMerchantInput>
  }

  export type CheckinUpdateManyWithWhereWithoutMerchantInput = {
    where: CheckinScalarWhereInput
    data: XOR<CheckinUpdateManyMutationInput, CheckinUncheckedUpdateManyWithoutMerchantInput>
  }

  export type RewardUpsertWithWhereUniqueWithoutMerchantInput = {
    where: RewardWhereUniqueInput
    update: XOR<RewardUpdateWithoutMerchantInput, RewardUncheckedUpdateWithoutMerchantInput>
    create: XOR<RewardCreateWithoutMerchantInput, RewardUncheckedCreateWithoutMerchantInput>
  }

  export type RewardUpdateWithWhereUniqueWithoutMerchantInput = {
    where: RewardWhereUniqueInput
    data: XOR<RewardUpdateWithoutMerchantInput, RewardUncheckedUpdateWithoutMerchantInput>
  }

  export type RewardUpdateManyWithWhereWithoutMerchantInput = {
    where: RewardScalarWhereInput
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyWithoutMerchantInput>
  }

  export type MerchantReferralsUpsertWithWhereUniqueWithoutReferringToInput = {
    where: MerchantReferralsWhereUniqueInput
    update: XOR<MerchantReferralsUpdateWithoutReferringToInput, MerchantReferralsUncheckedUpdateWithoutReferringToInput>
    create: XOR<MerchantReferralsCreateWithoutReferringToInput, MerchantReferralsUncheckedCreateWithoutReferringToInput>
  }

  export type MerchantReferralsUpdateWithWhereUniqueWithoutReferringToInput = {
    where: MerchantReferralsWhereUniqueInput
    data: XOR<MerchantReferralsUpdateWithoutReferringToInput, MerchantReferralsUncheckedUpdateWithoutReferringToInput>
  }

  export type MerchantReferralsUpdateManyWithWhereWithoutReferringToInput = {
    where: MerchantReferralsScalarWhereInput
    data: XOR<MerchantReferralsUpdateManyMutationInput, MerchantReferralsUncheckedUpdateManyWithoutReferringToInput>
  }

  export type MerchantReferralsScalarWhereInput = {
    AND?: MerchantReferralsScalarWhereInput | MerchantReferralsScalarWhereInput[]
    OR?: MerchantReferralsScalarWhereInput[]
    NOT?: MerchantReferralsScalarWhereInput | MerchantReferralsScalarWhereInput[]
    id?: StringFilter<"MerchantReferrals"> | string
    referringToId?: StringFilter<"MerchantReferrals"> | string
    referredById?: StringFilter<"MerchantReferrals"> | string
    referralCode?: StringFilter<"MerchantReferrals"> | string
    createdAt?: DateTimeFilter<"MerchantReferrals"> | Date | string
  }

  export type MerchantReferralsUpsertWithWhereUniqueWithoutReferredByInput = {
    where: MerchantReferralsWhereUniqueInput
    update: XOR<MerchantReferralsUpdateWithoutReferredByInput, MerchantReferralsUncheckedUpdateWithoutReferredByInput>
    create: XOR<MerchantReferralsCreateWithoutReferredByInput, MerchantReferralsUncheckedCreateWithoutReferredByInput>
  }

  export type MerchantReferralsUpdateWithWhereUniqueWithoutReferredByInput = {
    where: MerchantReferralsWhereUniqueInput
    data: XOR<MerchantReferralsUpdateWithoutReferredByInput, MerchantReferralsUncheckedUpdateWithoutReferredByInput>
  }

  export type MerchantReferralsUpdateManyWithWhereWithoutReferredByInput = {
    where: MerchantReferralsScalarWhereInput
    data: XOR<MerchantReferralsUpdateManyMutationInput, MerchantReferralsUncheckedUpdateManyWithoutReferredByInput>
  }

  export type UserCreateWithoutCheckinsInput = {
    id?: string
    name: string
    phoneNumber: string
    birthday?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rewards?: RewardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCheckinsInput = {
    id?: string
    name: string
    phoneNumber: string
    birthday?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rewards?: RewardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCheckinsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
  }

  export type MerchantCreateWithoutCheckinsInput = {
    id?: string
    name: string
    location: string
    nfcTagId: string
    rewardGoal: number
    rewardDescription: string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    rewards?: RewardCreateNestedManyWithoutMerchantInput
    referringTo?: MerchantReferralsCreateNestedManyWithoutReferringToInput
    referredBy?: MerchantReferralsCreateNestedManyWithoutReferredByInput
  }

  export type MerchantUncheckedCreateWithoutCheckinsInput = {
    id?: string
    name: string
    location: string
    nfcTagId: string
    rewardGoal: number
    rewardDescription: string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    rewards?: RewardUncheckedCreateNestedManyWithoutMerchantInput
    referringTo?: MerchantReferralsUncheckedCreateNestedManyWithoutReferringToInput
    referredBy?: MerchantReferralsUncheckedCreateNestedManyWithoutReferredByInput
  }

  export type MerchantCreateOrConnectWithoutCheckinsInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutCheckinsInput, MerchantUncheckedCreateWithoutCheckinsInput>
  }

  export type UserUpsertWithoutCheckinsInput = {
    update: XOR<UserUpdateWithoutCheckinsInput, UserUncheckedUpdateWithoutCheckinsInput>
    create: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCheckinsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCheckinsInput, UserUncheckedUpdateWithoutCheckinsInput>
  }

  export type UserUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewards?: RewardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewards?: RewardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MerchantUpsertWithoutCheckinsInput = {
    update: XOR<MerchantUpdateWithoutCheckinsInput, MerchantUncheckedUpdateWithoutCheckinsInput>
    create: XOR<MerchantCreateWithoutCheckinsInput, MerchantUncheckedCreateWithoutCheckinsInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutCheckinsInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutCheckinsInput, MerchantUncheckedUpdateWithoutCheckinsInput>
  }

  export type MerchantUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    nfcTagId?: StringFieldUpdateOperationsInput | string
    rewardGoal?: IntFieldUpdateOperationsInput | number
    rewardDescription?: StringFieldUpdateOperationsInput | string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewards?: RewardUpdateManyWithoutMerchantNestedInput
    referringTo?: MerchantReferralsUpdateManyWithoutReferringToNestedInput
    referredBy?: MerchantReferralsUpdateManyWithoutReferredByNestedInput
  }

  export type MerchantUncheckedUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    nfcTagId?: StringFieldUpdateOperationsInput | string
    rewardGoal?: IntFieldUpdateOperationsInput | number
    rewardDescription?: StringFieldUpdateOperationsInput | string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewards?: RewardUncheckedUpdateManyWithoutMerchantNestedInput
    referringTo?: MerchantReferralsUncheckedUpdateManyWithoutReferringToNestedInput
    referredBy?: MerchantReferralsUncheckedUpdateManyWithoutReferredByNestedInput
  }

  export type UserCreateWithoutRewardsInput = {
    id?: string
    name: string
    phoneNumber: string
    birthday?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRewardsInput = {
    id?: string
    name: string
    phoneNumber: string
    birthday?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRewardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
  }

  export type MerchantCreateWithoutRewardsInput = {
    id?: string
    name: string
    location: string
    nfcTagId: string
    rewardGoal: number
    rewardDescription: string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinCreateNestedManyWithoutMerchantInput
    referringTo?: MerchantReferralsCreateNestedManyWithoutReferringToInput
    referredBy?: MerchantReferralsCreateNestedManyWithoutReferredByInput
  }

  export type MerchantUncheckedCreateWithoutRewardsInput = {
    id?: string
    name: string
    location: string
    nfcTagId: string
    rewardGoal: number
    rewardDescription: string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinUncheckedCreateNestedManyWithoutMerchantInput
    referringTo?: MerchantReferralsUncheckedCreateNestedManyWithoutReferringToInput
    referredBy?: MerchantReferralsUncheckedCreateNestedManyWithoutReferredByInput
  }

  export type MerchantCreateOrConnectWithoutRewardsInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutRewardsInput, MerchantUncheckedCreateWithoutRewardsInput>
  }

  export type UserUpsertWithoutRewardsInput = {
    update: XOR<UserUpdateWithoutRewardsInput, UserUncheckedUpdateWithoutRewardsInput>
    create: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRewardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRewardsInput, UserUncheckedUpdateWithoutRewardsInput>
  }

  export type UserUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MerchantUpsertWithoutRewardsInput = {
    update: XOR<MerchantUpdateWithoutRewardsInput, MerchantUncheckedUpdateWithoutRewardsInput>
    create: XOR<MerchantCreateWithoutRewardsInput, MerchantUncheckedCreateWithoutRewardsInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutRewardsInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutRewardsInput, MerchantUncheckedUpdateWithoutRewardsInput>
  }

  export type MerchantUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    nfcTagId?: StringFieldUpdateOperationsInput | string
    rewardGoal?: IntFieldUpdateOperationsInput | number
    rewardDescription?: StringFieldUpdateOperationsInput | string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUpdateManyWithoutMerchantNestedInput
    referringTo?: MerchantReferralsUpdateManyWithoutReferringToNestedInput
    referredBy?: MerchantReferralsUpdateManyWithoutReferredByNestedInput
  }

  export type MerchantUncheckedUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    nfcTagId?: StringFieldUpdateOperationsInput | string
    rewardGoal?: IntFieldUpdateOperationsInput | number
    rewardDescription?: StringFieldUpdateOperationsInput | string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUncheckedUpdateManyWithoutMerchantNestedInput
    referringTo?: MerchantReferralsUncheckedUpdateManyWithoutReferringToNestedInput
    referredBy?: MerchantReferralsUncheckedUpdateManyWithoutReferredByNestedInput
  }

  export type MerchantCreateWithoutReferringToInput = {
    id?: string
    name: string
    location: string
    nfcTagId: string
    rewardGoal: number
    rewardDescription: string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinCreateNestedManyWithoutMerchantInput
    rewards?: RewardCreateNestedManyWithoutMerchantInput
    referredBy?: MerchantReferralsCreateNestedManyWithoutReferredByInput
  }

  export type MerchantUncheckedCreateWithoutReferringToInput = {
    id?: string
    name: string
    location: string
    nfcTagId: string
    rewardGoal: number
    rewardDescription: string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinUncheckedCreateNestedManyWithoutMerchantInput
    rewards?: RewardUncheckedCreateNestedManyWithoutMerchantInput
    referredBy?: MerchantReferralsUncheckedCreateNestedManyWithoutReferredByInput
  }

  export type MerchantCreateOrConnectWithoutReferringToInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutReferringToInput, MerchantUncheckedCreateWithoutReferringToInput>
  }

  export type MerchantCreateWithoutReferredByInput = {
    id?: string
    name: string
    location: string
    nfcTagId: string
    rewardGoal: number
    rewardDescription: string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinCreateNestedManyWithoutMerchantInput
    rewards?: RewardCreateNestedManyWithoutMerchantInput
    referringTo?: MerchantReferralsCreateNestedManyWithoutReferringToInput
  }

  export type MerchantUncheckedCreateWithoutReferredByInput = {
    id?: string
    name: string
    location: string
    nfcTagId: string
    rewardGoal: number
    rewardDescription: string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinUncheckedCreateNestedManyWithoutMerchantInput
    rewards?: RewardUncheckedCreateNestedManyWithoutMerchantInput
    referringTo?: MerchantReferralsUncheckedCreateNestedManyWithoutReferringToInput
  }

  export type MerchantCreateOrConnectWithoutReferredByInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutReferredByInput, MerchantUncheckedCreateWithoutReferredByInput>
  }

  export type MerchantUpsertWithoutReferringToInput = {
    update: XOR<MerchantUpdateWithoutReferringToInput, MerchantUncheckedUpdateWithoutReferringToInput>
    create: XOR<MerchantCreateWithoutReferringToInput, MerchantUncheckedCreateWithoutReferringToInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutReferringToInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutReferringToInput, MerchantUncheckedUpdateWithoutReferringToInput>
  }

  export type MerchantUpdateWithoutReferringToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    nfcTagId?: StringFieldUpdateOperationsInput | string
    rewardGoal?: IntFieldUpdateOperationsInput | number
    rewardDescription?: StringFieldUpdateOperationsInput | string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUpdateManyWithoutMerchantNestedInput
    rewards?: RewardUpdateManyWithoutMerchantNestedInput
    referredBy?: MerchantReferralsUpdateManyWithoutReferredByNestedInput
  }

  export type MerchantUncheckedUpdateWithoutReferringToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    nfcTagId?: StringFieldUpdateOperationsInput | string
    rewardGoal?: IntFieldUpdateOperationsInput | number
    rewardDescription?: StringFieldUpdateOperationsInput | string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUncheckedUpdateManyWithoutMerchantNestedInput
    rewards?: RewardUncheckedUpdateManyWithoutMerchantNestedInput
    referredBy?: MerchantReferralsUncheckedUpdateManyWithoutReferredByNestedInput
  }

  export type MerchantUpsertWithoutReferredByInput = {
    update: XOR<MerchantUpdateWithoutReferredByInput, MerchantUncheckedUpdateWithoutReferredByInput>
    create: XOR<MerchantCreateWithoutReferredByInput, MerchantUncheckedCreateWithoutReferredByInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutReferredByInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutReferredByInput, MerchantUncheckedUpdateWithoutReferredByInput>
  }

  export type MerchantUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    nfcTagId?: StringFieldUpdateOperationsInput | string
    rewardGoal?: IntFieldUpdateOperationsInput | number
    rewardDescription?: StringFieldUpdateOperationsInput | string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUpdateManyWithoutMerchantNestedInput
    rewards?: RewardUpdateManyWithoutMerchantNestedInput
    referringTo?: MerchantReferralsUpdateManyWithoutReferringToNestedInput
  }

  export type MerchantUncheckedUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    nfcTagId?: StringFieldUpdateOperationsInput | string
    rewardGoal?: IntFieldUpdateOperationsInput | number
    rewardDescription?: StringFieldUpdateOperationsInput | string
    activePromos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUncheckedUpdateManyWithoutMerchantNestedInput
    rewards?: RewardUncheckedUpdateManyWithoutMerchantNestedInput
    referringTo?: MerchantReferralsUncheckedUpdateManyWithoutReferringToNestedInput
  }

  export type CheckinCreateManyUserInput = {
    id?: string
    timestamp?: Date | string
    merchantId: string
  }

  export type RewardCreateManyUserInput = {
    id?: string
    progress?: number
    rewardClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    merchantId: string
  }

  export type CheckinUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutCheckinsNestedInput
  }

  export type CheckinUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    merchantId?: StringFieldUpdateOperationsInput | string
  }

  export type CheckinUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    merchantId?: StringFieldUpdateOperationsInput | string
  }

  export type RewardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    rewardClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutRewardsNestedInput
  }

  export type RewardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    rewardClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchantId?: StringFieldUpdateOperationsInput | string
  }

  export type RewardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    rewardClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchantId?: StringFieldUpdateOperationsInput | string
  }

  export type CheckinCreateManyMerchantInput = {
    id?: string
    timestamp?: Date | string
    userId: string
  }

  export type RewardCreateManyMerchantInput = {
    id?: string
    progress?: number
    rewardClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type MerchantReferralsCreateManyReferringToInput = {
    id?: string
    referredById: string
    referralCode: string
    createdAt?: Date | string
  }

  export type MerchantReferralsCreateManyReferredByInput = {
    id?: string
    referringToId: string
    referralCode: string
    createdAt?: Date | string
  }

  export type CheckinUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCheckinsNestedInput
  }

  export type CheckinUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CheckinUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RewardUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    rewardClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRewardsNestedInput
  }

  export type RewardUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    rewardClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RewardUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    rewardClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MerchantReferralsUpdateWithoutReferringToInput = {
    id?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: MerchantUpdateOneRequiredWithoutReferredByNestedInput
  }

  export type MerchantReferralsUncheckedUpdateWithoutReferringToInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredById?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MerchantReferralsUncheckedUpdateManyWithoutReferringToInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredById?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MerchantReferralsUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referringTo?: MerchantUpdateOneRequiredWithoutReferringToNestedInput
  }

  export type MerchantReferralsUncheckedUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    referringToId?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MerchantReferralsUncheckedUpdateManyWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    referringToId?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MerchantCountOutputTypeDefaultArgs instead
     */
    export type MerchantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MerchantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MerchantDefaultArgs instead
     */
    export type MerchantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MerchantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CheckinDefaultArgs instead
     */
    export type CheckinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CheckinDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RewardDefaultArgs instead
     */
    export type RewardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RewardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MerchantReferralsDefaultArgs instead
     */
    export type MerchantReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MerchantReferralsDefaultArgs<ExtArgs>

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