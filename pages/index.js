import Link from "next/link";
import { I18nProvider, I18n } from "@lingui/react";
import { t } from "@lingui/macro";
import catalog from "../src/locales/en/messages.po";

export default () => (
  <I18nProvider catalogs={{ en: catalog }} language={"en"}>
    <I18n>
      {({ i18n }) => (
        <div>
          {i18n._(t`Chat information`)}
          Hello World.{" "}
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      )}
    </I18n>
  </I18nProvider>
);
