import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type LoanApplicationObject = {
  __typename?: 'LoanApplicationObject';
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  loanAmount?: Maybe<Scalars['Float']['output']>;
  loanPurpose?: Maybe<Scalars['String']['output']>;
};

export type LoanProduct = {
  __typename?: 'LoanProduct';
  id?: Maybe<Scalars['Int']['output']>;
  interestRate?: Maybe<Scalars['Float']['output']>;
  maximumAmount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  loanApplications?: Maybe<Array<Maybe<LoanApplicationObject>>>;
  loanProducts?: Maybe<Array<Maybe<LoanProduct>>>;
};

export type LoanQueryVariables = Exact<{ [key: string]: never; }>;


export type LoanQuery = { __typename?: 'Query', loanProducts?: Array<{ __typename?: 'LoanProduct', id?: number | null, name?: string | null, interestRate?: number | null, maximumAmount?: number | null } | null> | null };


export const LoanDocument = gql`
    query Loan {
  loanProducts {
    id
    name
    interestRate
    maximumAmount
  }
}
    `;

/**
 * __useLoanQuery__
 *
 * To run a query within a React component, call `useLoanQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoanQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoanQuery(baseOptions?: Apollo.QueryHookOptions<LoanQuery, LoanQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoanQuery, LoanQueryVariables>(LoanDocument, options);
      }
export function useLoanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoanQuery, LoanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoanQuery, LoanQueryVariables>(LoanDocument, options);
        }
export function useLoanSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<LoanQuery, LoanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LoanQuery, LoanQueryVariables>(LoanDocument, options);
        }
export type LoanQueryHookResult = ReturnType<typeof useLoanQuery>;
export type LoanLazyQueryHookResult = ReturnType<typeof useLoanLazyQuery>;
export type LoanSuspenseQueryHookResult = ReturnType<typeof useLoanSuspenseQuery>;
export type LoanQueryResult = Apollo.QueryResult<LoanQuery, LoanQueryVariables>;