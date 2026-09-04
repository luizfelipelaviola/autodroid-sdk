import { ApolloClient } from '@apollo/client/core';

import { IAutoDroidSdkParams, createApolloClient } from '@api/apolloClient';

import { Admin } from '@services/admin';
import { User } from '@services/user';
import { Dataset } from '@services/dataset';
import { Processor } from '@services/processor';
import { Processing } from '@services/processing';
import { HealthCheck } from '@services/healthCheck';
import { Worker } from '@services/worker';

class AutoDroidSdk {
  public readonly apolloClient: ApolloClient<unknown>;

  public readonly admin: Admin;
  public readonly user: User;
  public readonly dataset: Dataset;
  public readonly processor: Processor;
  public readonly processing: Processing;
  public readonly healthCheck: HealthCheck;
  public readonly worker: Worker;

  constructor(params: IAutoDroidSdkParams) {
    this.apolloClient = createApolloClient(params);

    this.admin = new Admin(this);
    this.user = new User(this);
    this.dataset = new Dataset(this);
    this.processor = new Processor(this);
    this.processing = new Processing(this);
    this.healthCheck = new HealthCheck(this);
    this.worker = new Worker(this);
  }
}

export * from '@gql/graphql';

export { AutoDroidSdkResponseType } from '@utils/response.type';
export { AutoDroidSdk };
