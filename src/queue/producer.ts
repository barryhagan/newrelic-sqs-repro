import { SQSClient } from "@aws-sdk/client-sqs";

export class QueueProducer {
  private sqsClient: SQSClient;

  public constructor(endpoint?: string) {
    this.sqsClient = new SQSClient({ apiVersion: "latest" });
  }
}
