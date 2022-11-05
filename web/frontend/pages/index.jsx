import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>How to Enable the Calm App App</Heading>
                  <p>
                    1. Visit your store admin
                  </p>
                  <p>
                    2. Select Online Store
                  </p>
                  <p>
                    3. Click Customize button from the active theme
                  </p>
                  <p>
                    4. On the left, click App Embeds
                  </p>
                  <p>
                    5. Enable Calm App
                  </p>
                  <p>
                    6. Now you can find your custom sections on all templates.
                  </p>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt="Nice work on building a Shopify app"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        {/*<Layout.Section>
          <ProductsCard />
        </Layout.Section>*/}
      </Layout>
    </Page>
  );
}
