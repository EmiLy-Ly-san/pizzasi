import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

// =====================
// Types
// =====================

type Achievement = {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  completed: boolean;
};

type Props = {
  avatarUrl: string;
  bannerImageUrl: string;
  userName: string;
  role: string;
  achievements: Achievement[];
};

// =====================
// Component
// =====================

const SuccesDefisScreen: React.FC<Props> = ({
  avatarUrl,
  bannerImageUrl,
  userName,
  role,
  achievements,
}) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* Header */}
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        justifyContent: "space-between",
      }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: avatarUrl }}
            style={{ width: 48, height: 48, borderRadius: 24 }}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Bienvenido {userName} !
            </Text>
            <Text style={{ color: "#8A8A8A" }}>{role}</Text>
          </View>
        </View>

        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#F2F2F2",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>🔔</Text>
        </View>
      </View>

      {/* Banner */}
      <View style={{ paddingHorizontal: 16 }}>
        <View
          style={{
            backgroundColor: "#F6B76E",
            borderRadius: 20,
            padding: 20,
            overflow: "hidden",
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700" }}>
            Proposez nous votre recette
          </Text>
          <Text style={{ color: "#FFFFFF", marginTop: 8 }}>
            Proposez votre recette et devenez la Pizza du Trimestre !
          </Text>

          <TouchableOpacity
            style={{
              marginTop: 16,
              backgroundColor: "#FFFFFF",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 30,
              alignSelf: "flex-start",
            }}
          >
            <Text style={{ color: "#F6B76E", fontWeight: "600" }}>
              Participer →
            </Text>
          </TouchableOpacity>

          <Image
            source={{ uri: bannerImageUrl }}
            style={{
              position: "absolute",
              right: -20,
              top: 20,
              width: 160,
              height: 160,
              resizeMode: "contain",
            }}
          />
        </View>
      </View>

      {/* Section title */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 16,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          Succès & Défis
        </Text>
        <Text style={{ color: "#8A8A8A" }}>20 / 70</Text>
      </View>

      {/* Achievements */}
      <View style={{ paddingHorizontal: 16 }}>
        {achievements.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 12,
              borderRadius: 16,
              backgroundColor: "#FAFAFA",
              marginBottom: 12,
            }}
          >
            <Image
              source={{ uri: item.iconUrl }}
              style={{ width: 48, height: 48, marginRight: 12 }}
            />

            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "600" }}>{item.title}</Text>
              <Text style={{ color: "#8A8A8A", fontSize: 13 }}>
                {item.description}
              </Text>
            </View>

            <Text style={{ fontSize: 20 }}>
              {item.completed ? "✅" : "⬜"}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SuccesDefisScreen;
