/*instrumentation.ts*/
import { NodeSDK, node } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { PeriodicExportingMetricReader, ConsoleMetricExporter } from '@opentelemetry/sdk-metrics';
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-proto";

const sdk = new NodeSDK({
  traceExporter: new node.ConsoleSpanExporter(),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new ConsoleMetricExporter()
  }),
  instrumentations: [getNodeAutoInstrumentations()]
});

// Uncomment below for OTLP Exporters

// const sdk = new NodeSDK({
//   traceExporter: new OTLPTraceExporter({
//     url: '<your-otlp-endpoint>/v1/traces',
//     headers: {}
//   }),
//   metricReader: new PeriodicExportingMetricReader({
//     exporter: new OTLPMetricExporter({
//       url: '<your-otlp-endpoint>/v1/metrics',
//       headers: {}
//     }),
//   }),
//   instrumentations: [getNodeAutoInstrumentations()]
// });

sdk.start()