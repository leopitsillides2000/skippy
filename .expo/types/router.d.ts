/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/account` | `/(tabs)/add` | `/(tabs)/map` | `/(tabs)/watchlist` | `/_sitemap` | `/account` | `/add` | `/map` | `/watchlist`;
      DynamicRoutes: `/(tabs)/skips/${Router.SingleRoutePart<T>}` | `/pages/skips/${Router.SingleRoutePart<T>}` | `/pages/skips/+not-found` | `/skips/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(tabs)/skips/[id]` | `/pages/skips/+not-found` | `/pages/skips/[id]` | `/skips/[id]`;
    }
  }
}
