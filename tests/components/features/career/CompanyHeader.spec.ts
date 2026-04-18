import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CompanyHeader from "~/components/features/career/CompanyHeader.vue";

describe("CompanyHeader", () => {
  const defaultStubs = {
    DataPipelineSVG: true,
    ClientOnly: {
      template: '<div class="client-only-stub"><slot /></div>',
    },
    SectionTitle: {
      template: '<div class="section-title-stub"><slot /></div>',
    },
  };

  it("devrait avoir le DataPipelineSVG", () => {
    const wrapper = mount(CompanyHeader, {
      global: {
        stubs: {
          DataPipelineSVG: {
            template: '<div class="pipeline-stub"></div>',
          },
          ClientOnly: {
            template: "<div><slot /></div>",
          },
          SectionTitle: true,
        },
      },
    });

    expect(wrapper.find(".pipeline-stub").exists()).toBe(true);
  });

  it("devrait afficher le titre compétences techniques", () => {
    const wrapper = mount(CompanyHeader, {
      global: {
        stubs: defaultStubs,
      },
    });

    expect(wrapper.text()).toContain(
      "Quelques compétences techniques avec lesquels j'aime travailler en 2026",
    );
  });

  it("ne devrait pas mentionner Destia", () => {
    const wrapper = mount(CompanyHeader, {
      global: {
        stubs: defaultStubs,
      },
    });

    expect(wrapper.text()).not.toContain("Destia");
    expect(wrapper.find("a").exists()).toBe(false);
  });

  it("devrait avoir un conteneur card pour le pipeline", () => {
    const wrapper = mount(CompanyHeader, {
      global: {
        stubs: defaultStubs,
      },
    });

    const card = wrapper.find(".rounded-2xl");
    expect(card.exists()).toBe(true);
  });

  it("devrait utiliser le composant SectionTitle", () => {
    const wrapper = mount(CompanyHeader, {
      global: {
        stubs: defaultStubs,
      },
    });

    expect(wrapper.find(".section-title-stub").exists()).toBe(true);
  });
});
