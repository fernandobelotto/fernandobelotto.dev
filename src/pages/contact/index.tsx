import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ContactForm } from "../../components/ContactForm";
import CustomImage from "../../components/CustomImage";
import Layout from "../../components/Layout";
import { SocialIconList } from "../../components/SocialIconList";
import { IMAGE_URL_04 } from "../../constants/links";
import { useTranslation } from "react-i18next";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey="6LfS-lYeAAAAAMH06PUVeHjI3v4gHDrRwF5vII3u">
        <Layout
          pageTitle={t("Contact")}
          subTitle={t("There many ways to get in touch with me")}
        >
          <CustomImage imageUrl={IMAGE_URL_04} />
          <VStack mt="7" spacing={10}>
            <SocialIconList />
            {/* <ContactForm /> */}
          </VStack>
        </Layout>
      </GoogleReCaptchaProvider>
    </>
  );
}
