import classNames from "classnames";
import React, { useCallback } from "react";
import { HiChevronRight } from "react-icons/hi";
import HomeBreadCrumb from "./HomeBreadCrumb";
import { IBreadcrumb } from "types";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Select from "../Select";
import { LANGUAGE_OPTIONS } from "../../constants";
import { LOCALES } from "../../intl/constants";
import { useLang } from "../WCLayout";
import { useIntl } from "react-intl";

type CardProps = {
  children: React.ReactNode;
  breadcrumbs: IBreadcrumb[];
  isLoading?: boolean;
};

const Card: React.FC<CardProps> = ({ children, breadcrumbs, isLoading }) => {
  const navigate = useNavigate();
  const { onChangeLang } = useLang();
  const { formatMessage } = useIntl();

  const handleOnChangeLanguage = useCallback((locale: string) => {
    onChangeLang(locale as LOCALES);
  }, []);

  return (
    <section className="card">
      {isLoading && <Loader />}
      <nav className="cardNav" aria-label="Breadcrumb">
        <ol className="list">
          {breadcrumbs.map((breadcrumb) => {
            const itemClassName = classNames("navItem", {
              hover: breadcrumb.isHover,
            });

            return breadcrumb.isHome ? (
              <HomeBreadCrumb
                link={breadcrumb?.link}
                key={breadcrumb.id}
                isHover={Boolean(breadcrumb.isHover)}
                label={formatMessage({ id: breadcrumb.labelKey })}
              />
            ) : (
              <li key={breadcrumb.id}>
                <section className="navItemWrapper">
                  <HiChevronRight aria-hidden="true" className="chevronRight" />

                  <button
                    onClick={() => breadcrumb.link && navigate(breadcrumb.link)}
                    className={itemClassName}
                    tabIndex={breadcrumb.isHover ? 1 : -1}
                  >
                    {formatMessage({ id: breadcrumb.labelKey })}
                  </button>
                </section>
              </li>
            );
          })}
        </ol>

        <Select options={LANGUAGE_OPTIONS} onChange={handleOnChangeLanguage} />
      </nav>

      {!isLoading && <section className="content">{children}</section>}
    </section>
  );
};

export default React.memo(Card);
